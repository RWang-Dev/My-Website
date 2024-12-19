const { BlobServiceClient } = require("@azure/storage-blob");

const BLOB_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;

if (!BLOB_CONNECTION_STRING) {
  throw new Error("Azure Blob Storage connection string is not defined.");
}

const blobServiceClient = BlobServiceClient.fromConnectionString(
  BLOB_CONNECTION_STRING
);

const getContainerClient = (containerName) => {
  if (!containerName) {
    throw new Error("Container name must be provided.");
  }
  return blobServiceClient.getContainerClient(containerName);
};

async function uploadBlob(containerName, blobName, base64Data) {
  const containerClient = getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  // Convert base64 to buffer
  const buffer = Buffer.from(base64Data.split(";base64,").pop(), "base64");

  try {
    await blockBlobClient.uploadData(buffer);
    console.log("Uploaded blob to:", blockBlobClient.url);
    return blockBlobClient.url;
  } catch (error) {
    console.error("Error uploading to blob storage:", error);
    throw error;
  }
}

module.exports = { getContainerClient, uploadBlob };
