import assert from "assert";
import { 
  TestHelpers,
  Clanker_TokenCreated
} from "generated";
const { MockDb, Clanker } = TestHelpers;

describe("Clanker contract TokenCreated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Clanker contract TokenCreated event
  const event = Clanker.TokenCreated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Clanker_TokenCreated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Clanker.TokenCreated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualClankerTokenCreated = mockDbUpdated.entities.Clanker_TokenCreated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedClankerTokenCreated: Clanker_TokenCreated = {
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
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualClankerTokenCreated, expectedClankerTokenCreated, "Actual ClankerTokenCreated should be the same as the expectedClankerTokenCreated");
  });
});
