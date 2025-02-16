const { reloadApp } = require("detox-expo-helpers");

describe("Example", () => {
  beforeAll(async () => {
    await reloadApp();
    // sleep so app can boot
    await sleep(4000);
  });

  beforeEach(async () => {});

  it("should have welcome screen", async () => {
    await expect(element(by.id("fabian"))).toBeVisible();
    await expect(element(by.id("mittag"))).toBeVisible();
    await expect(element(by.label("Eins"))).toBeVisible();
    await device.takeScreenshot("welcome screen before");
    await element(by.id("click_button")).tap();
    await expect(element(by.label("Zwei"))).toBeVisible();
    await expect(element(by.label("Eins"))).toBeNotVisible();
    await device.takeScreenshot("welcome screen after");
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
