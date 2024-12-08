import {
  Clanker,
  Clanker_TokenCreated,
  LockerFactory,
  LockerFactory_deployed,
  SocialDexDeployer,
  SocialDexDeployer_TokenCreated,
  handlerContext,
  EventLog,
  Clanker_TokenCreated_eventArgs,
  LockerFactory_Deployed_eventArgs,
  SocialDexDeployer_TokenCreated_eventArgs
} from "generated";

Clanker.TokenCreated.handler(async ({ event, context }: {
  event: EventLog<Clanker_TokenCreated_eventArgs>,
  context: handlerContext
}) => {
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

  context.Clanker_TokenCreated.set(entity);
});

LockerFactory.Deployed.handler(async ({ event, context }: {
  event: EventLog<LockerFactory_Deployed_eventArgs>,
  context: handlerContext
}) => {
  const entity: LockerFactory_deployed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lockerAddress: event.params.lockerAddress,
    owner: event.params.owner,
    tokenId: event.params.tokenId,
    lockingPeriod: event.params.lockingPeriod,
  };

  context.LockerFactory_deployed.set(entity);
});

SocialDexDeployer.TokenCreated.handler(async ({ event, context }: {
  event: EventLog<SocialDexDeployer_TokenCreated_eventArgs>,
  context: handlerContext
}) => {
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

  context.SocialDexDeployer_TokenCreated.set(entity);
});