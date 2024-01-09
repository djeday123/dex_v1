describe("Dex", () => {
  it("should work", async () => {
    const [owner, otherAccount] = await ethers.getSigners();
    const UsdcToken = await ethers.getContractFactory("Usdc");
    const usdcToken = await UsdcToken.deploy();

    console.log(usdcToken)
  });
});