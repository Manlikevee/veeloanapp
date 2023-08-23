// Import any necessary modules or data here

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  // Assuming loanDataList is imported or defined here
  const loanDataList = [
    {
      type: 'Term Loan',
      code: 'dnnxnu373hnsasas',
      amount: 'N900,000',
      status: 'Pending Approval',
      action: 'View'
    },
    {
      type: 'Term Loan',
      code: 'dnnxnu373hnssxasa',
      amount: 'N900,000',
      status: 'Pending Approval',
      action: 'View'
    },
    {
      type: 'Term Loan',
      code: 'dnnxnu373hnccasass',
      amount: 'N900,000',
      status: 'Pending Approval',
      action: 'View'
    },
    // Add more items as needed
  ];

  loanDataList.forEach((loan) => {
    
    const loanCode = loan.code;
    createPage({
      path: `/loan-details/${loanCode}`,
      component: require.resolve('./src/templates/loan-details.js'),
     
      context: { loanCode }, // Pass the loan code as context
    });
  });
};


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page);
  }
};
