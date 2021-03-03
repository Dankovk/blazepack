const {
  logInfo,
  logError,
  logSuccess,
  getSandboxFiles,
  createSandboxFiles,
} = require('../../utils');

async function cloneSandbox({ id }) {
  try {
    logInfo('📥 Fetching sandbox info...');
    const res = await getSandboxFiles(id);
    logInfo('📁 Creating files & directories');
    await createSandboxFiles(res.data);
    logSuccess('✅ Sandbox cloned');
  } catch (e) {
    logError(`😢 Unable to clone sandbox: ${e}`);
  }
}

module.exports = cloneSandbox;
