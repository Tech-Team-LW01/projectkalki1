
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
      "title": "Introduction to AI & Machine Learning",
      "description": "Learn the fundamentals of AI and its real-world applications.",
      "content": {
        "sections": [
          { "title": "Overview of Artificial Intelligence", "topics": [
            "Definition and history of AI",
            "Key milestones in AI development",
            "Types of AI: Narrow AI, General AI, Super AI",
            "Examples and real-world applications"
          ]},
          { "title": "AI vs. Machine Learning vs. Deep Learning", "topics": [
            "Key differences and similarities",
            "When to use each approach"
          ]},
          { "title": "Real-world Applications of AI", "topics": [
            "AI in healthcare, finance, education, and other industries",
            "Case studies of AI implementation"
          ]},
          { "title": "Ethical Considerations in AI", "topics": [
            "Bias in AI models",
            "Explainability and transparency",
            "AI governance and regulations"
          ]}
        ]
      }
    },
    {
      "title": "Python for AI & ML",
      "description": "Learn Python programming essentials for AI and ML development.",
      "content": {
        "sections": [
          { "title": "Introduction to Python for AI", "topics": [
            "Setting up the development environment",
            "Jupyter Notebooks and IDEs",
            "Essential Libraries: NumPy, Pandas, Matplotlib"
          ]},
          { "title": "Data Structures and Manipulation", "topics": [
            "Lists, dictionaries, and data frames",
            "Indexing and slicing techniques"
          ]},
          { "title": "Basic Data Visualization", "topics": [
            "Creating histograms, scatter plots, and box plots",
            "Understanding trends and patterns in data"
          ]}
        ]
      }
    },
    {
      "title": "Data Preprocessing & Feature Engineering",
      "description": "Master data cleaning and feature engineering for AI models.",
      "content": {
        "sections": [
          { "title": "Data Cleaning: Handling Missing Values & Outliers", "topics": [
            "Techniques to handle missing data",
            "Identifying and treating outliers"
          ]},
          { "title": "Encoding Categorical Data", "topics": [
            "One-hot encoding vs. label encoding",
            "When to use each method"
          ]},
          { "title": "Feature Scaling and Normalization", "topics": [
            "Min-max scaling, standardization, and robust scaling"
          ]},
          { "title": "Feature Selection Techniques", "topics": [
            "Correlation matrix analysis",
            "Recursive feature elimination (RFE)"
          ]}
        ]
      }
    },
    {
      "title": "Supervised Learning",
      "description": "Understand the fundamentals of supervised learning algorithms.",
      "content": {
        "sections": [
          { "title": "Introduction to Supervised Learning", "topics": [
            "Definition and types of supervised learning problems"
          ]},
          { "title": "Regression Techniques", "topics": [
            "Linear regression: Model building and interpretation",
            "Logistic regression: Binary classification problems"
          ]},
          { "title": "Classification Algorithms", "topics": [
            "Decision Trees and Random Forest",
            "Support Vector Machines (SVM) and their applications"
          ]},
          { "title": "Model Evaluation Metrics", "topics": [
            "Accuracy, Precision, Recall, F1-Score",
            "Confusion matrix interpretation"
          ]}
        ]
      }
    },
    {
      "title": "Unsupervised Learning",
      "description": "Explore clustering, anomaly detection, and dimensionality reduction.",
      "content": {
        "sections": [
          { "title": "Introduction to Clustering", "topics": [
            "Understanding K-Means, DBSCAN, and Hierarchical clustering"
          ]},
          { "title": "Dimensionality Reduction", "topics": [
            "Principal Component Analysis (PCA)",
            "t-SNE for visualization"
          ]},
          { "title": "Anomaly Detection Techniques", "topics": [
            "Application of unsupervised learning in fraud detection"
          ]}
        ]
      }
    },
    {
      "title": "Deep Learning & Neural Networks",
      "description": "Master the foundations of neural networks and backpropagation.",
      "content": {
        "sections": [
          { "title": "Basics of Neural Networks & Perceptron", "topics": [
            "Structure of an artificial neuron",
            "Single-layer vs. multi-layer perceptrons"
          ]},
          { "title": "Activation Functions and Loss Functions", "topics": [
            "ReLU, Sigmoid, Softmax, etc.",
            "Loss functions for regression and classification problems"
          ]},
          { "title": "Feedforward and Backpropagation", "topics": [
            "Weight updates and optimization techniques"
          ]}
        ]
      }
    },
    {
        title: "Convolutional Neural Networks (CNNs)",
        description: "Dummy description for Convolutional Neural Networks (CNNs).",
        content: {
          sections: [
            {
              title: "Understanding Convolutional Layers",
              topics: [
                "Filters, strides, and feature maps"
              ]
            },
            {
              title: "Pooling, Padding, and Stride in CNNs",
              topics: [
                "Role of max pooling and average pooling"
              ]
            },
            {
              title: "Transfer Learning and Fine-tuning",
              topics: [
                "Using pre-trained models for custom applications"
              ]
            }
          ]
        }
      },
      {
        title: "Natural Language Processing (NLP)",
        description: "Dummy description for Natural Language Processing (NLP).",
        content: {
          sections: [
            {
              title: "Introduction to NLP & Text Processing",
              topics: [
                "Understanding text as data",
                "Tokenization, Lemmatization, and Stopwords"
              ]
            },
            {
              title: "Processing raw text data",
              topics: []
            },
            {
              title: "Word Embeddings",
              topics: [
                "Word2Vec, GloVe, and BERT models"
              ]
            },
            {
              title: "Sentiment Analysis & Text Classification",
              topics: [
                "Analyzing customer reviews and feedback"
              ]
            }
          ]
        }
      },
      {
        title: "AI for Real-world Applications",
        description: "Dummy description for AI for Real-world Applications.",
        content: {
          sections: [
            {
              title: "AI in Various Industries",
              topics: [
                "Healthcare, finance, e-commerce, manufacturing"
              ]
            },
            {
              title: "Basics of Reinforcement Learning",
              topics: [
                "Understanding rewards and policy learning"
              ]
            },
            {
              title: "AI for Edge Devices",
              topics: [
                "TinyML and On-device AI applications"
              ]
            }
          ]
        }
      },
      {
        title: "AI Model Deployment & MLOps",
        description: "Dummy description for AI Model Deployment & MLOps.",
        content: {
          sections: [
            {
              title: "Model Deployment with Flask/FastAPI",
              topics: [
                "Serving AI models as web APIs"
              ]
            },
            {
              title: "Using Docker & Kubernetes for AI Models",
              topics: [
                "Containerization and orchestration of AI applications"
              ]
            },
            {
              title: "CI/CD for AI Pipelines",
              topics: [
                "Automating model training and deployment"
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
      Course Modules
        
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
        <div className="relative h-auto min-h-[400px] bg-gray-100 rounded-lg p-6 overflow-y-auto">
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