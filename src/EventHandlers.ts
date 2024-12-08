import {
  Clanker,
  Clanker_TokenCreated,
  SocialDexDeployer,
  SocialDexDeployer_TokenCreated,
} from "generated";


Clanker.TokenCreated.handler(async ({ event, context }) => {
  const entity: Clanker_TokenCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenAddress: event.params.tokenAddress,
    lpNftId: event.params.lpNftId,
    deployer: event.params.deployer,
    fid: event.params.fid,
    name: event.params.name,
    symbol: event.params.symbol,
    supply: event.params.supply,
    lockerAddress: event.params.lockerAddress,
    castHash: event.params.castHash,
  };

  await context.Clanker_TokenCreated.set(entity);

});


SocialDexDeployer.TokenCreated.handler(async ({ event, context }) => {
  const entity: SocialDexDeployer_TokenCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenAddress: event.params.tokenAddress,
    lpNftId: event.params.lpNftId,
    deployer: event.params.deployer,
    name: event.params.name,
    symbol: event.params.symbol,
    supply: event.params.supply,
    _supply: event.params._supply,
    lockerAddress: event.params.lockerAddress,
  };

  await context.SocialDexDeployer_TokenCreated.set(entity);


});