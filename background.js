chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        condition: {
          urlFilter: 'https://www.rad.cvm.gov.br/ENET/frmDownloadDocumento.aspx',
          resourceTypes: ['main_frame'],
        },
        action: {
          type: 'modifyHeaders',
          responseHeaders: [
            {
              header: 'Content-Disposition',
              operation: 'set',
              value: 'inline',
            },
            {
              header: 'Content-Type',
              operation: 'set',
              value: 'application/pdf',
            },
          ],
        },
      },
    ],
  })
})
