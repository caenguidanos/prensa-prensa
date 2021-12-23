export async function mongodbMemoryServer() {
   const { default: setup } = await import("./app/global-setup");
   const { default: teardown } = await import("./app/global-teardown");

   return {
      setup,
      teardown
   };
}
