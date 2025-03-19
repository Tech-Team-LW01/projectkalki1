
"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

type Module = {
    title: string;
    description: string;
    content?: {
      sections: {
        title: string;
        topics: string[];
      }[];
    };
  };

  const modules: Module[] = [
    {
      "title": "Introduction to Machine Learning",
      "description": "Explore the fundamentals of machine learning, its types, and real-world applications across industries. Gain hands-on experience with datasets and visualization tools.",
      "content": {
        "sections": [
          {
            "title": "Understanding Machine Learning",
            "topics": [
              "Definition and importance.",
              "Real-world applications (healthcare, finance, e-commerce)."
            ]
          },
          {
            "title": "Types of Machine Learning",
            "topics": [
              "Supervised Learning: Regression for prediction, Classification for categorization.",
              "Unsupervised Learning: Dimensionality reduction and clustering.",
              "Reinforcement Learning: Basics of reward-based learning."
            ]
          },
          {
            "title": "Industry Use Cases",
            "topics": [
              "Customer segmentation in marketing.",
              "Fraud detection in finance.",
              "Demand forecasting in retail."
            ]
          },
          {
            "title": "Hands-On Activity",
            "topics": [
              "Dataset: Real-world customer transaction data.",
              "Load and explore the dataset using Pandas.",
              "Visualizing customer demographics (age, income, spending scores) using Matplotlib & Seaborn."
            ]
          },
          {
            "title": "Learning Outcomes",
            "topics": [
              "Understand the fundamentals of machine learning and its types.",
              "Identify real-world ML applications across industries."
            ]
          }
        ]
      }
    },
    {
      "title": "Data Preprocessing & Feature Engineering",
      "description": "Learn essential techniques for cleaning, preprocessing, and transforming raw data into a machine-learning-ready format. Master feature engineering to enhance model performance.",
      "content": {
        "sections": [
          {
            "title": "Data Cleaning",
            "topics": [
              "Handling missing values using mean, median, and mode imputation.",
              "Removing duplicates and irrelevant data."
            ]
          },
          {
            "title": "Feature Engineering",
            "topics": [
              "Encoding Categorical Variables: One-hot encoding for nominal variables, Label encoding for ordinal variables.",
              "Feature Scaling Techniques: Min-max scaling and standardization.",
              "Feature Selection: Correlation matrix analysis, Recursive Feature Elimination (RFE) for selecting key features."
            ]
          },
          {
            "title": "Hands-On Activity",
            "topics": [
              "Clean and preprocess dataset.",
              "Apply one-hot encoding & scale numerical features.",
              "Select key features using correlation matrix and RFE."
            ]
          },
          {
            "title": "Learning Outcomes",
            "topics": [
              "Clean, preprocess, and transform raw data into a machine-learning-ready format.",
              "Apply feature engineering techniques to improve model performance."
            ]
          }
        ]
      }
    },
    {
      "title": "Supervised Learning: Regression & Classification",
      "description": "Dive into supervised learning techniques, including regression and classification. Learn to build, evaluate, and interpret models using real-world datasets.",
      "content": {
        "sections": [
          {
            "title": "Regression",
            "topics": [
              "Linear Regression on Salary Data: Analyzing salary data using sklearn, Checking coefficients for the model, Visualizing the model using Matplotlib, Error analysis (Cost, Residuals).",
              "Multiple Linear Regression: Using multiple features to predict target variables, Evaluating impact of multiple factors.",
              "Model Evaluation Metrics: R² Score, Mean Absolute Error (MAE), Root Mean Squared Error (RMSE)."
            ]
          },
          {
            "title": "Classification",
            "topics": [
              "Logistic Regression: Understanding classification problems, Binary vs. Multiclass classification, Model interpretation and decision boundaries.",
              "Implementation on Titanic Dataset: Data preprocessing and handling missing values, Feature engineering and data imputation, Training and evaluating logistic regression model."
            ]
          },
          {
            "title": "Hands-On Activity",
            "topics": [
              "Train Linear Regression on Salary Data.",
              "Implement Logistic Regression on Titanic Dataset.",
              "Evaluate classification model performance (Confusion Matrix, Precision, Recall)."
            ]
          },
          {
            "title": "Learning Outcomes",
            "topics": [
              "Understand and apply regression & classification techniques.",
              "Evaluate models with appropriate performance metrics."
            ]
          }
        ]
      }
    }
  ];

const Modules = () => {
    const [activeModule, setActiveModule] = useState<number>(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-center item-center">

      <h2 className="text-3xl text-[#07038d] font-bold mb-6">
      What Will You Learn with Hands-On
        
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              className="cursor-pointer"
              animate={{
                opacity: activeModule === index ? 1 : 0.5
              }}
              onClick={() => setActiveModule(index)}
            >
              <h3 className={`text-2xl font-semibold mb-2 transition-colors ${activeModule === index ? 'text-[#000080]' : 'text-gray-400'}`}>
                {module.title}
              </h3>
              {activeModule === index && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gray-600"
                >
                  {module.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
        <div className="relative h-[400px] bg-gray-100 rounded-lg p-6 overflow-y-auto">
          {modules[activeModule].content && (
            <div className="space-y-6">
              {modules[activeModule].content?.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-xl font-semibold text-[#000080]">
                    {section.title}
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {section.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="text-gray-600">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modules;