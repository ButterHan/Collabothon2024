export const alertConfigurationData = {
  configurations: [
    {
      title: "Loan Payment Due Soon",
      description:
        "Your loan payment for account #ACC-2024-001 is due by 31.10.2024. Please ensure funds are available for the scheduled payment.",
      type: "Financial",
      subtype: "Loan",
      triggerCondition: "7 days before the due date",
      priority: "high",
    },
    {
      title: "Approval Needed for High-Value Transaction",
      description:
        "A transaction of €500,000 requires your approval. Please review and approve within 24 hours.",
      type: "Transaction Approval",
      subtype: "Payment",
      triggerCondition: "Detection of large transaction",
      priority: "urgent",
    },
    {
      title: "Currency Exchange Rate Threshold Reached",
      description:
        "The EUR/USD exchange rate has dropped below your set threshold of 1.10. Please review your hedging strategy.",
      type: "Market Alert",
      subtype: "Stock change",
      triggerCondition: "Real-time threshold met",
      priority: "medium",
    },
    {
      title: "Potential Fraudulent Activity Detected",
      description:
        "Suspicious activity has been identified on account #ACC-2024-XYZ. Please verify recent transactions.",
      type: "Security",
      subtype: "--||--",
      triggerCondition: "Immediate fraud detection",
      priority: "urgent",
    },
    {
      title: "Upcoming Quarterly Financial Report Due",
      description:
        "Your Q3 financial report is due by 10.11.2024. Please submit the necessary documents via the client portal.",
      type: "Compliance",
      subtype: "--||--",
      triggerCondition: "14 days before deadline",
      priority: "medium",
    },
    {
      title: "Credit Line Utilization Alert",
      description:
        "You have utilized 85% of your credit line on account #ACC-2024-XYZ. Please review your available credit.",
      type: "Financial",
      subtype: "Payment",
      triggerCondition: "Credit line usage exceeds 80%",
      priority: "high",
    },
    {
      title: "Payment Approval Deadline Approaching",
      description:
        "A payment of €200,000 requires approval by 17:00 today to avoid delays. Please approve the transaction in the system.",
      type: "Urgent",
      subtype: "--||--",
      triggerCondition: "A few hours before approval deadline",
      priority: "urgent",
    },
    {
      title: "New Regulatory Requirements",
      description:
        "Recent regulatory changes may impact your investment strategy. Please review the latest compliance guidelines.",
      type: "Regulatory",
      subtype: "--||--",
      triggerCondition: "Post regulatory updates",
      priority: "medium",
    },
    {
      title: "Low Liquidity Warning",
      description:
        "Liquidity on treasury account #TR-2024-001 has fallen below the set threshold of €100,000. Please transfer funds to maintain required balances.",
      type: "Financial",
      subtype: "Loan",
      triggerCondition: "Real-time liquidity threshold breach",
      priority: "high",
    },
    {
      title: "KYC Update Required",
      description:
        "Your annual KYC information needs to be updated by 01.12.2024. Please provide the necessary documentation to remain compliant.",
      type: "Compliance",
      subtype: "--||--",
      triggerCondition: "30 days before KYC deadline",
      priority: "medium",
    },
  ],
};
