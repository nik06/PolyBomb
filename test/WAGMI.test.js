const WAGMIContract = artifacts.require("WAGMI");

contract("WAGMI", (accounts) => {
  it("Should mint NGMI when WAGMI being transferred", async () => {
    const WAGMI = await WAGMIContract.deployed();
    const from = accounts[0];
    const to = accounts[1];
    await WAGMI.transfer(to, "1000");
    assert.equal((await WAGMI.balanceOf(to)).toString(), "900");
  });
});
