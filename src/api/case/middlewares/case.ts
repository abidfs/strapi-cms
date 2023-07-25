import { Strapi } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Strapi }) => {
  return async (ctx, next) => {
    await next();
    if (ctx.request.path.includes("api::case.case")) {
      // https://medium.com/@adenleabbey/audit-log-trail-with-strapi-74f6bdf70daf
      console.log(
        "Inside case middleware",
        ctx?.state?.user,
        ctx.request.body,
        ctx.response.body
      );
    }
  };
};
