import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { Hono } from "hono";
import { signinInput, signupInput } from "@lalit_singh/blog-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

//Signup
userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  console.log(body);
  const { success } = signupInput.safeParse(body);
  console.log(success, "body parsed ");
  try {
    if (!success) {
      c.status(411);
      return c.json({
        message: "inputs are not correct",
      });
    }
  } catch (e) {
    c.status(411);
    return c.json({
      message: "inputs are not correct",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    console.log("inside creation");
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    console.log("please");
    console.log(user, " user creation");
    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );

    return c.json({
      token,
      message: "user created successfully",
    });
  } catch (e) {
    c.status(411);
    return c.text("unable to signin");
  }
});

//SignIn
userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);

  if (!success) {
    return c.json({
      message: "invalid input",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email, //feild : given value to check
        password: body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.text("invalid creds");
    }
    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    const { password: pass, ...rest } = user;
    return c.json({
      token,
      message: "login successfully ",
      rest,
    });
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.text("Invalid");
  }
});
