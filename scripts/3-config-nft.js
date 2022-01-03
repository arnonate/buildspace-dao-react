import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xaC9A37439d62bA8B64DFbBA3861D4Ff221Ac4bf3",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Ring of Power",
        description: "This NFT will give you access to TokienDAO!",
        image: readFileSync("scripts/assets/ringofpower.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()