const translations = {
  en: {
    titles: {
      home: "Sarah Sabouni | Data Scientist",
      projects: "Projects | Sarah Sabouni",
      project1: "Case Study: NO₂ Prediction | Sarah Sabouni",
      project2: "Case Study: Healthcare Cost | Sarah Sabouni",
      project3: "Case Study: Vehicle Market | Sarah Sabouni",
      project4: "Case Study: Mood Classifier | Sarah Sabouni",
      project5: "Case Study: Sales Intelligence | Sarah Sabouni",
      privacy: "Privacy Policy | Sarah Sabouni - Data Scientist",
      legal: "Legal Notice & Impressum | Sarah Sabouni - Data Scientist",
      error404: "404: Page Not Found | Sarah Sabouni",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Live: Data Science in Germany",
      title:
        'Transforming Data into Actionable <span class="text-[#A78BFA]">Insights</span>',
      subtitle:
        "Data scientist with a mathematics background, focused on turning complex data into meaningful insights. Passionate about building data-driven solutions for intelligent decision-making and real-world challenges.",
      download_cv: "DOWNLOAD CV",
      cv_path: "Sarah_Sabouni_CV_EN.pdf",
      explore_projects: "EXPLORE PROJECTS",
    },
    about: {
      label: "BACKGROUND",
      title: "About Me",
      p1: 'I am a master’s student at TU Chemnitz specializing in <span class="text-white font-bold">data science</span>, with a strong background in <span class="text-white font-bold">mathematics</span> that shapes my analytical and structured approach to problem-solving. Through my studies, I have built expertise in <span class="text-white font-semibold">optimization</span>, <span class="text-white font-semibold">machine learning</span>, <span class="text-white font-semibold">statistical modeling</span>, and <span class="text-white font-semibold">real-world data analysis</span>.',
      p2: "My journey has also strengthened my resilience and adaptability, which shape how I learn and solve problems. I am especially interested in using data science to understand complex systems and build practical, impactful solutions that support better decisions in everyday life.",
      view_cv: "VIEW MY CV",
      cv_path: "Sarah_Sabouni_CV_EN.pdf",
    },
    skills: {
      label: "SKILLS & TECHNOLOGIES",
      title: "Core Expertise",
      card1: {
        title: "Machine Learning & Artificial Intelligence",
        points: [
          "Model development and evaluation",
          "Neural networks (basic to intermediate, including ANN/CNN)",
          "Adaptive and online learning approaches",
          "End-to-end machine learning workflows",
        ],
        tech: "Python, PyTorch, scikit-learn",
      },
      card2: {
        title: "Data Analysis & Statistical Modeling",
        points: [
          "Exploratory data analysis (EDA)",
          "Statistical modeling and hypothesis testing",
          "Data cleaning and preprocessing",
          "Outlier detection and data quality assessment",
        ],
        tech: "Python, NumPy, Pandas, SQL",
      },
      card3: {
        title: "Business Intelligence, Visualization & Communication",
        points: [
          "Dashboard development and visual reporting",
          "KPI definition and performance tracking",
          "Data storytelling and insight communication",
          "Presentation of results for technical and non-technical audiences",
        ],
        tech: "Power BI, Power Query, DAX, Matplotlib",
      },
      card4: {
        title: "Optimization & Mathematical Modeling",
        points: [
          "Formulation of optimization problems (objective functions, constraints)",
          "Linear and non-linear optimization techniques",
          "Mathematical modeling of real-world systems",
          "Optimization for predictive and data-driven models",
        ],
        tech: "Python, NumPy, Basic Optimization Libraries",
      },
    },
    projects: {
      label: "PORTFOLIO",
      title: "Featured Projects",
      view_case_study: "View Case Study",
      view_all: "VIEW ALL PROJECTS",
      items: {
        no2: {
          title: "Online NO₂ Prediction (OMD)",
          description:
            "An online machine learning system that continuously predicts and adapts to hourly NO₂ fluctuations using live environmental data.",
        },
        music: {
          title: "AI Music Mood Classifier",
        },
        sales: {
          title: "Sales Dashboard (Power BI)",
        },
      },
    },
    testimonials: {
      label: "TESTIMONIALS",
      title: "Expert Endorsements",
    },
    contact: {
      label: "GET IN TOUCH",
      title: "Let’s build intelligent systems that shape a smarter future",
      subtitle:
        "Currently open to Data Science research collaborations and Machine Learning opportunities in Germany or remotely",
      button: "GET IN TOUCH",
    },
    footer: {
      developed_by: "DEVELOPED BY",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      // aria_back_to_top: "Back to top",
      // aria_razan_linkedin: "Visit Razan's LinkedIn profile",
    },
    // pages
    projects_page: {
      back_home: "Back to Home",
      hero_title: "Selected <span class='text-primary'>Projects</span>",
      hero_subtitle:
        "A showcase of data-driven research and machine learning implementations. These projects reflect my journey through Master's studies, focusing on building predictive models and transforming complex data into meaningful insights.",
      filters: {
        all: "All",
        ml: "Machine Learning",
        ai: "Artificial Intelligence",
        dv: "Data Visualization",
        da: "Data Analytics",
      },
      items: {
        no2: {
          title: "Online NO₂ Forecasting",
          desc: "A real-time adaptive ML system using Entropic Online Mirror Descent (OMD) to predict urban air quality fluctuations in Chemnitz with zero retraining required.",
        },
        insurance: {
          title: "Healthcare Cost Regression",
          desc: "A comparative study between custom PyTorch implementations and Scikit-Learn to predict insurance charges with 75% variance explanation.",
        },
        cars: {
          title: "Vehicle Market Estimation",
          desc: "End-to-end regression pipeline featuring advanced feature engineering and log-transformations to estimate used car market values.",
        },
        mood: {
          title: "Deep Mood Classifier",
          desc: "A multi-class Neural Network trained in PyTorch to categorize audio tracks into emotional vectors with 80% accuracy using complex audio features.",
        },
        sales: {
          title: "Executive Sales Intelligence",
          desc: "Interactive Power BI dashboard using DAX and Power Query to transform raw retail data into actionable business KPIs and regional insights.",
        },
      },
      cta_view: "VIEW CASE STUDY",
    },
    project_details: {
      // project1
      no2: {
        back_link: "Back to Home",
        label: "Machine Learning Case Study",
        title: "Online NO₂ Prediction Using Entropic Online Mirror Descent",
        subtitle:
          "An online machine learning system that continuously predicts and adapts to hourly NO₂ fluctuations using live environmental sensor data.",
        location_tag: "Case Study: Real-Time Prediction in Chemnitz, Germany",
        context_title: "The Context",
        context_p:
          "Air quality in Chemnitz fluctuates hourly due to traffic patterns, weather, and other environmental factors. Real-time prediction of NO₂ concentrations is crucial for monitoring pollution levels and supporting informed public health decisions.",
        objective_title: "The Objective",
        objective_p:
          "Develop an adaptive ML system that predicts the next hour’s NO₂ concentration while continuously adapting to changing local conditions using live sensor data.",
        approach_title: "The Approach",
        approach_p:
          "I implemented a continuous online learning system using Entropic Online Mirror Descent (OMD). Historical data from Chemnitz air-quality sensors initialized the model, and live measurements were retrieved hourly via the WAQI API. The system continuously normalizes incoming data, predicts the next NO₂ levels, logs observations, and updates the model in real time.",
        results_title: "Results & Performance",
        adaptability_label: "Adaptability Analysis",
        adaptability_p:
          "The OMD approach provides a theoretically efficient and adaptive solution for real-time NO₂ prediction. Its single-parameter update rule allows the model to continuously adjust to changing environmental conditions, maintaining stability while quickly responding to concept drift.",
        robustness_label: "Robustness",
        robustness_p:
          "This highlights the method’s robustness and suitability for continuous online learning scenarios, even without extensive historical retraining. The system demonstrates a high capacity for local adaptation.",
        insights_title: "Insights & Future Work",
        insight_label: "Case Study Insight",
        insight_card_p:
          "This study demonstrates that a minimalistic, single-parameter model can provide accurate, adaptive predictions in real-time scenarios without the overhead of deep learning architectures.",
        roadmap_title: "The Roadmap",
        roadmap_item1:
          "Multi-dimensional OMD for richer feature representation.",
        roadmap_item2: "Integrating variables like humidity and wind speed.",
        roadmap_item3:
          "Live visualization dashboard for improved user interaction.",
        github_title: "Technical Implementation & Source Code",
        github_p:
          "Explore the full implementation, data processing scripts, and OMD update logic on GitHub.",
        github_btn: "VIEW REPOSITORY ON GITHUB",
        takeaway:
          "Takeaway: This project showcases my ability to apply advanced online learning methods to real-world environmental data with a focus on mathematical efficiency and practical deployment.",
      },
      // project2
      insurance: {
        back_link: "Back to Home",
        label: "Machine Learning Case Study",
        title: "Medical Insurance Charges Prediction",
        subtitle:
          "Estimating healthcare costs with machine learning and regression modeling.",
        location_tag:
          "Case Study: Predicting Medical Insurance Charges with Linear Regression",

        context_title: "The Context",
        context_p:
          "Medical insurance costs are influenced by multiple demographic and lifestyle factors, making accurate cost estimation valuable for both insurers and individuals.",

        objective_title: "The Objective",
        objective_p:
          "Develop a machine learning model to predict medical insurance charges based on demographic and health-related features, while comparing a custom implementation in PyTorch with a baseline model in scikit-learn.",

        approach_title: "The Approach",
        approach_p:
          "I built an end-to-end regression workflow using the Medical Insurance Cost dataset from Kaggle. The project included exploratory data analysis, visualization of feature relationships, and preprocessing of both categorical and numerical variables.",

        results_title: "Results & Performance",
        accuracy_label: "Model Accuracy",
        r2_label: "R² Score",

        accuracy_p:
          "The custom PyTorch model explained approximately 75% of the variance in charges. Residual analysis showed that the model captured the main cost drivers effectively.",
        comparison_label: "Baseline Comparison",
        comparison_p:
          "The project demonstrated that linear regression provides strong baseline performance for structured healthcare cost data, with consistent results across both implementations.",

        insights_title: "Insights & Future Work",
        insight_label: "Key Insight",
        insight_p:
          "Smoking status emerged as a primary driver of cost. This project highlights how feature relationships directly impact healthcare pricing and financial risk assessment.",

        roadmap_title: "The Roadmap",
        roadmap_item1: "Testing non-linear models and interaction features.",
        roadmap_item2:
          "Hyperparameter tuning and cross-validation for robustness.",
        roadmap_item3:
          "Expanding the dataset to include medical history variables.",

        github_title: "Technical Implementation & Source Code",
        github_p:
          "Explore the end-to-end regression pipeline, from EDA to custom PyTorch training, on GitHub.",
        github_btn: "VIEW REPOSITORY ON GITHUB",
        takeaway:
          "Takeaway: This project highlights my ability to build and evaluate end-to-end regression models to solve practical cost prediction problems.",
      },
      // project3
      car_prediction: {
        back_link: "Back to Home",
        label: "Machine Learning Case Study",
        title: "Used Car Price Prediction",
        subtitle:
          "Predicting vehicle prices with machine learning and regression analysis.",
        location_tag:
          "Case Study: Used Car Price Estimation with Linear Regression",

        context_title: "The Context",
        context_p:
          "Pricing used cars accurately is important for both buyers and sellers, yet vehicle prices depend on multiple interacting factors such as age, mileage, brand, and condition.",

        objective_title: "The Objective",
        objective_p:
          "Develop a machine learning model to predict used car prices based on vehicle characteristics, while comparing a custom implementation in PyTorch with a standard model in scikit-learn.",

        approach_title: "The Approach",
        approach_p:
          "I built a complete regression pipeline using the Car Sales dataset from Kaggle. The workflow included data cleaning, log transformation for skewed variables, and target encoding for manufacturers.",

        results_title: "Results & Performance",
        metric_label: "Metric Accuracy",
        r2_label: "R² Score",
        results_p:
          "Both models achieved an R² score of approximately 0.77, showing strong consistency between the custom PyTorch implementation and the Scikit-Learn baseline.",
        analysis_label: "Analysis",
        analysis_p:
          "The results demonstrate that careful preprocessing and feature engineering, particularly target encoding, significantly improved the overall predictive accuracy.",

        insights_title: "Insights & Future Work",
        insight_label: "Case Study Insight",
        insight_p:
          "Factors like brand and model year were critical drivers in determining fair market value. Combining domain understanding with robust preprocessing was the key to success.",

        roadmap_title: "The Roadmap",
        roadmap_item1: "Testing regularized models such as Ridge or Lasso.",
        roadmap_item2:
          "Exploring tree-based methods like Random Forest or XGBoost.",
        roadmap_item3: "Incorporating vehicle condition and market trends.",

        github_title: "Technical Implementation & Source Code",
        github_p:
          "Explore the full project, including data cleaning scripts and the manual learning pipeline, on GitHub.",
        github_btn: "VIEW REPOSITORY ON GITHUB",
        takeaway:
          "Takeaway: This project highlights my ability to build and evaluate end-to-end machine learning pipelines to solve real-world valuation problems.",
      },
      // project4
      music_classifier: {
        back_link: "Back to Home",
        label: "Artificial Intelligence Case Study",
        title: "AI Music Mood Classifier",
        subtitle:
          "Predicting the mood of a song using neural networks and audio features.",
        location_tag: "Case Study: Music Mood Prediction with Deep Learning",

        context_title: "The Context",
        context_p:
          "Music platforms increasingly rely on automated mood detection to enhance user experience. Accurately classifying the mood of a song requires understanding complex audio patterns.",

        objective_title: "The Objective",
        objective_p:
          "Develop a machine learning system that classifies songs into four moods — sad, happy, energetic, or calm — based on numerical audio features extracted from each track.",

        approach_title: "The Approach",
        approach_p:
          "I implemented a neural network classifier in PyTorch, leveraging features like danceability, energy, and tempo. The architecture consisted of hidden layers with ReLU activation and dropout.",

        results_title: "Results & Performance",
        accuracy_label: "Model Accuracy",
        test_accuracy: "Test Accuracy",
        results_p:
          "The model achieved approximately 80% accuracy, demonstrating its capability to reliably classify songs. Loss curves indicate balanced performance across all mood classes.",
        arch_label: "Architecture",
        arch_p:
          "The neural network utilized hidden layers (64 and 32 neurons) optimized using Adam with cross-entropy loss, trained over 30 epochs.",

        insights_title: "Insights & Future Work",
        insight_label: "Deep Learning Insight",
        insight_p:
          "A well-structured neural network can capture subtle patterns in audio. Feature engineering remains key in improving multi-class classification.",

        roadmap_title: "The Roadmap",
        roadmap_item1: "Incorporating additional audio features and metadata.",
        roadmap_item2:
          "Experimenting with Recurrent (RNN) or Convolutional (CNN) architectures.",
        roadmap_item3:
          "Deploying a real-time mood prediction API for interactive apps.",

        github_title: "Technical Implementation & Source Code",
        github_p:
          "Explore the full PyTorch implementation, training scripts, and audio feature analysis on GitHub.",
        github_btn: "VIEW REPOSITORY ON GITHUB",
        takeaway:
          "Takeaway: This project highlights my ability to apply deep learning to complex audio data for multi-class classification.",
      },
      // project5
      sales_dashboard: {
        back_link: "Back to Home",
        label: "Data Visualization & Dashboards Case Study",
        title: "Superstore Sales Dashboard",
        subtitle:
          "Transforming sales data into actionable business insights with Power BI.",
        location_tag: "Case Study: Interactive Sales Performance Analysis",

        context_title: "The Context",
        context_p:
          "Retail businesses generate large volumes of data, but turning it into clear operational insights is challenging. Understanding sales trends and regional behavior is essential for profitability.",

        objective_title: "The Objective",
        objective_p:
          "Develop an interactive BI dashboard to analyze sales, profit, and shipping performance. The goal was to identify high-performing products and operational opportunities.",

        approach_title: "The Approach",
        approach_p:
          "I designed an interactive dashboard in Power BI using Power Query for data transformation and DAX for calculated KPIs. The structure enables drilling down into product categories and regional patterns.",

        results_title: "Results & Performance",
        impact_label: "Strategic Impact",
        impact_p:
          "The dashboard provides a clear overview of profitability trends. It enables quick identification of top-performing segments and highlights factors like shipping delays.",
        tools_label: "BI Tools Used",

        insights_title: "Insights & Future Work",
        insight_label: "BI Case Study Insight",
        insight_p:
          "This study highlights how dynamic dashboards transform raw data into practical insights. Moving from static reports to drill-down views is key for effective decision-making.",

        roadmap_title: "The Roadmap",
        roadmap_item1:
          "Integrating forecasting models for predictive sales analysis.",
        roadmap_item2: "Adding advanced customer segmentation analysis (RFM).",
        roadmap_item3: "Connecting live data sources for real-time monitoring.",

        github_title: "Project Repository & Documentation",
        github_p:
          "Explore the full project on GitHub, including the Power BI source file and the data cleaning process.",
        github_btn: "VIEW REPOSITORY ON GITHUB",
        takeaway:
          "Takeaway: This project highlights my ability to use business intelligence to communicate insights and support strategic decision-making.",
      },
    },
    legal: {
      back: "Back to Home",
      title: "Legal Notice",
      id_title: "Identification",
      id_text:
        "This website is a professional portfolio owned and operated by Sarah Sabouni. It showcases expertise in Data Science, Predictive Modeling, and AI Solutions. The content is intended for informational purposes and does not constitute professional advice.",
      liability_title: "Liability",
      liability_text:
        "The content is curated with care, but we are not liable for the absolute accuracy of external technical data or the content of third-party links.",
      ip_title: "Intellectual Property",
      ip_text:
        "All analysis frameworks, custom code snippets, and data visualizations presented are the intellectual property of Sarah Sabouni, unless otherwise stated.",
      footer_contact: "For professional inquiries, you can find me on",
    },
    privacy_page: {
      back_home: "Back to Home",
      last_updated: "Last updated: April 2026",
      section1_title: "Data Collection",
      section1_text:
        "This portfolio is a static showcase. We do not collect, store, or track any personal data from our visitors. If you choose to contact me via email or LinkedIn, your information will only be used to respond to your inquiry.",
      section2_title: "Cookies & Tracking",
      section2_text:
        "The Golden Standard: This website uses Zero Cookies. We do not use tracking pixels, analytics scripts, or any technology that monitors your behavior.",
      section3_title: "Third-Party Links",
      section3_text:
        "Links to LinkedIn, GitHub, and Kaggle are provided for professional networking. Their respective privacy policies apply once you navigate away.",
    },
    error404: {
      title: "Data Point Not Found",
      message:
        "The page you are looking for is an <span class='text-primary font-bold'>outlier</span>. It either moved or never existed in our dataset.",
      btn: "RETURN TO BASE",
    },
  },
  de: {
    titles: {
      home: "Sarah Sabouni | Data Scientist",
      projects: "Projekte | Sarah Sabouni",
      project1: "Fallstudie: NO₂-Vorhersage | Sarah Sabouni",
      project2: "Fallstudie: Gesundheitskosten | Sarah Sabouni",
      project3: "Fallstudie: Fahrzeugmarkt | Sarah Sabouni",
      project4: "Fallstudie: Stimmungsklassifizierung | Sarah Sabouni",
      project5: "Fallstudie: Verkaufsanalyse | Sarah Sabouni",
      privacy: "Datenschutzerklärung | Sarah Sabouni - Data Scientist",
      legal: "Impressum | Sarah Sabouni - Data Scientist",
      error404: "404: Seite nicht gefunden | Sarah Sabouni",
    },
    nav: {
      home: "Startseite",
      about: "Über mich",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      badge: "Live: Data Science in Deutschland",
      title:
        'Daten in handlungsorientierte <span class="text-[#A78BFA]">Erkenntnisse</span> verwandeln',
      subtitle:
        "Data Scientist mit mathematischem Hintergrund, spezialisiert darauf, komplexe Daten in aussagekräftige Erkenntnisse zu verwandeln. Leidenschaftlich in der Entwicklung datengesteuerter Lösungen für intelligente Entscheidungsfindung und reale Herausforderungen.",

      download_cv: "LEBENSLAUF HERUNTERLADEN",
      cv_path: "Sarah_Sabouni_CV_DE.pdf",
      explore_projects: "PROJEKTE ERKUNDEN",
    },
    about: {
      label: "HINTERGRUND",
      title: "Über mich",
      p1: 'Ich bin Masterstudentin an der TU Chemnitz mit Schwerpunkt <span class="text-white font-bold">Data Science</span>. Mein fundierter Hintergrund in <span class="text-white font-bold">Mathematik</span> prägt meinen analytischen und strukturierten Ansatz zur Lösung komplexer Probleme. Im Rahmen meines Studiums habe ich fundierte Kenntnisse in <span class="text-white font-semibold">Optimierung</span>, <span class="text-white font-semibold">Machine Learning</span>, <span class="text-white font-semibold">statistischer Modellierung</span> und <span class="text-white font-semibold">Datenanalyse</span> erworben.',
      p2: "Mein persönlicher Werdegang hat meine Resilienz und Anpassungsfähigkeit nachhaltig gestärkt. Besonders interessiert mich der Einsatz von Data Science, um komplexe Systeme zu verstehen und praxisnahe, wirkungsvolle Lösungen für reale Herausforderungen zu entwickeln.",
      view_cv: "LEBENSLAUF ANSEHEN",
      cv_path: "Sarah_Sabouni_CV_DE.pdf",
    },
    skills: {
      label: "FÄHIGKEITEN & TECHNOLOGIEN",
      title: "Kernkompetenzen",
      card1: {
        title: "Machine Learning & Künstliche Intelligenz",
        points: [
          "Entwicklung und Evaluierung von Modellen",
          "Neuronale Netze (Grundlagen bis Fortgeschrittene, inkl. ANN/CNN)",
          "Adaptive und Online-Lernverfahren",
          "End-to-End-ML-Workflows",
        ],
        tech: "Python, PyTorch, scikit-learn",
      },
      card2: {
        title: "Datenanalyse & Statistik",
        points: [
          "Explorative Datenanalyse (EDA)",
          "Statistische Modellierung und Hypothesentests",
          "Datenbereinigung und -vorverarbeitung",
          "Ausreißererkennung und Qualitätsprüfung",
        ],
        tech: "Python, NumPy, Pandas, SQL",
      },
      card3: {
        title: "Business Intelligence, Visualisierung & Kommunikation",
        points: [
          "Entwicklung von Dashboards und visuelles Reporting",
          "Definition von KPIs und Performance-Tracking",
          "Data Storytelling und Kommunikation von Erkenntnissen",
          "Präsentation von Ergebnissen für technisches und nicht-technisches Publikum",
        ],
        tech: "Power BI, Power Query, DAX, Matplotlib",
      },
      card4: {
        title: "Optimierung & Mathematische Modellierung",
        points: [
          "Formulierung von Optimierungsproblemen (Zielfunktionen, Nebenbedingungen)",
          "Lineare und nichtlineare Optimierungsverfahren",
          "Mathematische Modellierung realer Systeme",
          "Optimierung für prädiktive und datengetriebene Modelle",
        ],
        tech: "Python, NumPy, Optimierungsbibliotheken",
      },
    },
    projects: {
      label: "PORTFOLIO",
      title: "Ausgewählte Projekte",
      view_case_study: "FALLSTUDIE ANSEHEN",
      view_all: "ALLE PROJEKTE ANSEHEN",
      items: {
        no2: {
          title: "Online NO₂-Vorhersage (OMD)",
          description:
            "Ein Online-System für maschinelles Lernen, das stündliche NO₂-Schwankungen mithilfe von Live-Umweltdaten kontinuierlich vorhersagt und anpasst.",
        },
        music: {
          title: "KI-Musik-Stimmungsklassifizierer",
        },
        sales: {
          title: "Verkaufs-Dashboard (Power BI)",
        },
      },
    },
    testimonials: {
      label: "REFERENZEN",
      title: "Expertenbewertungen",
    },
    contact: {
      label: "KONTAKT",
      title:
        "Lassen Sie uns intelligente Systeme bauen, die eine smartere Zukunft gestalten",
      subtitle:
        "Derzeit offen für Forschungskooperationen im Bereich Data Science sowie Karrieremöglichkeiten im Bereich Machine Learning – in Deutschland oder remote",
      button: "KONTAKTIEREN",
    },
    footer: {
      developed_by: "ENTWICKELT VON",
      legal: "Impressum",
      privacy: "Datenschutz",
      // aria_back_to_top: "Zurück nach oben",
      // aria_razan_linkedin: "Besuchen Sie das LinkedIn-Profil von Razan",
    },
    // pages
    projects_page: {
      back_home: "Zurück zur Startseite",
      hero_title: "Ausgewählte <span class='text-primary'>Projekte</span>",
      hero_subtitle:
        "Eine Präsentation datengesteuerter Forschung und Implementierungen im Bereich Maschinelles Lernen. Diese Projekte spiegeln meinen akademischen Weg im Masterstudium wider, mit Fokus auf prädiktive Modelle und die Transformation komplexer Daten in aussagekräftige Erkenntnisse.",
      filters: {
        all: "Alle",
        ml: "Maschinelles Lernen",
        ai: "Künstliche Intelligenz",
        dv: "Datenvisualisierung",
        da: "Datenanalyse",
      },
      items: {
        no2: {
          title: "Online NO₂-Vorhersage",
          desc: "Ein adaptives Echtzeit-ML-System, das Entropic Online Mirror Descent (OMD) nutzt, um städtische Luftqualitätsschwankungen in Chemnitz ohne erneutes Training vorherzusagen.",
        },
        insurance: {
          title: "Gesundheitskosten-Regression",
          desc: "Eine vergleichende Studie zwischen benutzerdefinierten PyTorch-Implementierungen und Scikit-Learn zur Vorhersage von Versicherungskosten mit 75 % Varianzaufklärung.",
        },
        cars: {
          title: "Fahrzeugmarkt-Schätzung",
          desc: "End-to-End-Regressionspipeline mit fortschrittlichem Feature-Engineering und Log-Transformationen zur Schätzung von Gebrauchtwagen-Marktwerten.",
        },
        mood: {
          title: "Deep Mood Classifier",
          desc: "Ein in PyTorch trainiertes neuronales Netzwerk zur Klassifizierung von Audiotracks in emotionale Vektoren mit 80 % Genauigkeit basierend auf komplexen Audiomerkmalen.",
        },
        sales: {
          title: "Executive Sales Intelligence",
          desc: "Interaktives Power BI-Dashboard unter Verwendung von DAX und Power Query zur Transformation von Einzelhandelsdaten in geschäftskritische KPIs.",
        },
      },
      cta_view: "FALLSTUDIE ANSEHEN",
    },
    project_details: {
      // project1
      no2: {
        back_link: "Zurück zur Startseite",
        label: "Machine Learning Fallstudie",
        title: "Online NO₂-Vorhersage mittels Entropic Online Mirror Descent",
        subtitle:
          "Ein Online-ML-System, das stündliche NO₂-Schwankungen auf Basis von Live-Umweltsensordaten kontinuierlich vorhersagt und adaptiert.",
        location_tag:
          "Fallstudie: Echtzeit-Vorhersage in Chemnitz, Deutschland",
        context_title: "Kontext",
        context_p:
          "Die Luftqualität in Chemnitz schwankt stündlich durch Verkehrsaufkommen, Wetter und Umweltfaktoren. Eine Echtzeit-Vorhersage der NO₂-Konzentration ist entscheidend für das Monitoring der Umweltbelastung und fundierte gesundheitspolitische Entscheidungen.",
        objective_title: "Zielsetzung",
        objective_p:
          "Entwicklung eines adaptiven ML-Systems, das die NO₂-Konzentration der nächsten Stunde prognostiziert und sich kontinuierlich mittels Live-Sensordaten an lokale Bedingungen anpasst.",
        approach_title: "Methodik",
        approach_p:
          "Implementierung eines kontinuierlichen Online-Lernsystems basierend auf Entropic Online Mirror Descent (OMD). Historische Daten Chemnitzer Sensoren dienten der Initialisierung, während Live-Messungen stündlich über die WAQI-API abgerufen, normalisiert und in Echtzeit verarbeitet wurden.",
        results_title: "Ergebnisse & Performance",
        adaptability_label: "Adaptivitätsanalyse",
        adaptability_p:
          "Der OMD-Ansatz bietet eine effiziente Lösung für die NO₂-Echtzeitvorhersage. Die Ein-Parameter-Aktualisierungsregel ermöglicht eine ständige Anpassung an veränderte Bedingungen und reagiert präzise auf Konzeptdrift (Concept Drift).",
        robustness_label: "Robustheit",
        robustness_p:
          "Die Methode überzeugt durch Robustheit in Online-Lernszenarien, selbst ohne umfangreiches Retraining. Das System zeigt eine hohe Kapazität für lokale Anpassungen.",
        insights_title: "Erkenntnisse & Roadmap",
        insight_label: "Fallstudien-Einblick",
        insight_card_p:
          "Diese Studie belegt, dass ein minimalistisches Ein-Parameter-Modell präzise, adaptive Vorhersagen in Echtzeit liefern kann – ohne den Overhead komplexer Deep-Learning-Architekturen.",
        roadmap_title: "Roadmap",
        roadmap_item1:
          "Multidimensionales OMD für komplexere Merkmalsdarstellungen.",
        roadmap_item2:
          "Integration weiterer Variablen wie Luftfeuchtigkeit und Windgeschwindigkeit.",
        roadmap_item3:
          "Live-Visualisierungs-Dashboard zur verbesserten Nutzerinteraktion.",
        github_title: "Technische Implementierung & Quellcode",
        github_p:
          "Die vollständige Implementierung, Datenverarbeitungsskripte und die OMD-Update-Logik finden Sie auf GitHub.",
        github_btn: "REPOSITORY AUF GITHUB ANSEHEN",
        takeaway:
          "Fazit: Dieses Projekt demonstriert meine Kompetenz in der Anwendung fortgeschrittener Online-Lernmethoden auf reale Umweltdaten mit Fokus auf mathematische Effizienz.",
      },
      // project2
      insurance: {
        back_link: "Zurück zur Startseite",
        label: "Machine Learning Fallstudie",
        title: "Vorhersage medizinischer Versicherungskosten",
        subtitle:
          "Schätzung von Gesundheitskosten mittels maschinellem Lernen und Regressionsmodellen.",
        location_tag:
          "Fallstudie: Vorhersage von Versicherungskosten mit linearer Regression",

        context_title: "Kontext",
        context_p:
          "Medizinische Versicherungskosten werden von verschiedenen demografischen und Lebensstil-Faktoren beeinflusst. Eine präzise Kostenschätzung ist sowohl für Versicherer als auch für Einzelpersonen von großem Wert.",

        objective_title: "Zielsetzung",
        objective_p:
          "Entwicklung eines ML-Modells zur Vorhersage von Versicherungskosten basierend auf demografischen Merkmalen, inklusive eines Vergleichs zwischen einer PyTorch-Implementierung und scikit-learn.",

        approach_title: "Methodik",
        approach_p:
          "Ich habe einen vollständigen Regressions-Workflow mit dem 'Medical Insurance Cost'-Datensatz von Kaggle erstellt. Das Projekt umfasst explorative Datenanalyse (EDA), Merkmals-Preprocessing und One-Hot-Encoding.",

        results_title: "Ergebnisse & Performance",
        accuracy_label: "Modellgenauigkeit",
        r2_label: "R² Wert",
        accuracy_p:
          "Das PyTorch-Modell erklärte ca. 75 % der Varianz der Kosten. Die Residualanalyse zeigte, dass das Modell die Hauptkostentreiber effektiv erfasst.",

        comparison_label: "Baseline-Vergleich",
        comparison_p:
          "Das Projekt zeigte, dass lineare Regression eine starke Baseline für strukturierte Gesundheitsdaten bietet, mit konsistenten Ergebnissen über beide Implementierungen hinweg.",

        insights_title: "Erkenntnisse & Roadmap",
        insight_label: "Wichtige Erkenntnis",
        insight_p:
          "Der Raucherstatus stellte sich als primärer Kostentreiber heraus. Dies verdeutlicht, wie Merkmalsbeziehungen direkt die Preisgestaltung und Risikobewertung beeinflussen.",

        roadmap_title: "Die Roadmap",
        roadmap_item1:
          "Testen von nicht-linearen Modellen und Interaktionsmerkmalen.",
        roadmap_item2:
          "Hyperparameter-Tuning und Kreuzvalidierung für mehr Robustheit.",
        roadmap_item3:
          "Erweiterung des Datensatzes um medizinische Historien-Variablen.",

        github_title: "Technische Implementierung & Quellcode",
        github_p:
          "Entdecken Sie die gesamte Regressions-Pipeline, von der EDA bis zum PyTorch-Training, auf GitHub.",
        github_btn: "REPOSITORY AUF GITHUB ANSEHEN",
        takeaway:
          "Fazit: Dieses Projekt unterstreicht meine Fähigkeit, End-to-End-Regressionsmodelle zu bauen und zu evaluieren, um praktische Vorhersageprobleme zu lösen.",
      },
      // project3
      car_prediction: {
        back_link: "Zurück zur Startseite",
        label: "Machine Learning Fallstudie",
        title: "Gebrauchtwagen-Preisvorhersage",
        subtitle:
          "Vorhersage von Fahrzeugpreisen mittels maschinellem Lernen und Regressionsanalyse.",
        location_tag:
          "Fallstudie: Schätzung von Gebrauchtwagenpreisen mit linearer Regression",

        context_title: "Kontext",
        context_p:
          "Die genaue Preisgestaltung von Gebrauchtwagen ist für Käufer und Verkäufer gleichermaßen wichtig. Fahrzeugpreise hängen von Faktoren wie Alter, Kilometerstand, Marke und Zustand ab.",

        objective_title: "Zielsetzung",
        objective_p:
          "Entwicklung eines ML-Modells zur Vorhersage von Preisen basierend auf Fahrzeugmerkmalen, inklusive eines Vergleichs zwischen PyTorch und scikit-learn.",

        approach_title: "Methodik",
        approach_p:
          "Ich habe eine Regressions-Pipeline mit dem 'Car Sales'-Datensatz von Kaggle erstellt. Der Workflow umfasste Datenreinigung, Log-Transformationen und Target-Encoding für Hersteller.",

        results_title: "Ergebnisse & Performance",
        metric_label: "Metrische Genauigkeit",
        r2_label: "R²-Wert",
        results_p:
          "Beide Modelle erreichten einen R²-Wert von ca. 0,77, was die Konsistenz zwischen der eigenen PyTorch-Implementierung und der Scikit-Learn-Baseline bestätigt.",
        analysis_label: "Analyse",
        analysis_p:
          "Die Ergebnisse zeigen, dass sorgfältiges Preprocessing und Feature Engineering die Vorhersagegenauigkeit signifikant verbessert haben.",

        insights_title: "Erkenntnisse & Roadmap",
        insight_label: "Fallstudien-Erkenntnis",
        insight_p:
          "Marke und Modelljahr waren entscheidende Faktoren bei der Ermittlung des Marktwerts. Die Kombination aus Fachwissen und robustem Preprocessing war der Schlüssel.",

        roadmap_title: "Die Roadmap",
        roadmap_item1:
          "Testen von regularisierten Modellen wie Ridge oder Lasso.",
        roadmap_item2:
          "Untersuchung von baumbasierten Methoden wie Random Forest oder XGBoost.",
        roadmap_item3: "Einbeziehung von Fahrzeugzustand und Markttrends.",

        github_title: "Technische Implementierung & Quellcode",
        github_p:
          "Entdecken Sie das gesamte Projekt, inklusive Datenreinigungsskripten und der manuellen Lern-Pipeline, auf GitHub.",
        github_btn: "REPOSITORY AUF GITHUB ANSEHEN",
        takeaway:
          "Fazit: Dieses Projekt unterstreicht meine Fähigkeit, End-to-End-ML-Pipelines zu erstellen, um reale Bewertungsprobleme zu lösen.",
      },
      // project4
      music_classifier: {
        back_link: "Zurück zur Startseite",
        label: "KI-Fallstudie",
        title: "KI-Musik-Stimmungs-Klassifikator",
        subtitle:
          "Vorhersage der Stimmung eines Liedes mittels neuronaler Netze und Audio-Merkmalen.",
        location_tag: "Fallstudie: Musikstimmungs-Vorhersage mit Deep Learning",

        context_title: "Kontext",
        context_p:
          "Musikplattformen setzen verstärkt auf automatisierte Stimmungserkennung, um das Nutzererlebnis zu verbessern. Eine präzise Klassifizierung erfordert das Verständnis komplexer Audiomuster.",

        objective_title: "Zielsetzung",
        objective_p:
          "Entwicklung eines Systems, das Lieder in vier Stimmungen — traurig, glücklich, energetisch oder ruhig — basierend auf numerischen Audio-Merkmalen klassifiziert.",

        approach_title: "Methodik",
        approach_p:
          "Ich habe einen neuronalen Netz-Klassifikator in PyTorch implementiert, der Merkmale wie Tanzbarkeit, Energie und Tempo nutzt. Die Architektur umfasst Hidden Layers mit ReLU-Aktivierung und Dropout.",

        results_title: "Ergebnisse & Performance",
        accuracy_label: "Modellgenauigkeit",
        test_accuracy: "Test-Genauigkeit",
        results_p:
          "Das Modell erreichte eine Genauigkeit von ca. 80 %. Die Verlustkurven zeigen eine ausgewogene Leistung über alle vier Stimmungsklassen hinweg.",
        arch_label: "Architektur",
        arch_p:
          "Das neuronale Netz nutzte Hidden Layers (64 und 32 Neuronen), optimiert mit Adam und Cross-Entropy Loss, trainiert über 30 Epochen.",

        insights_title: "Erkenntnisse & Roadmap",
        insight_label: "Deep Learning Erkenntnis",
        insight_p:
          "Ein gut strukturiertes neuronales Netz kann subtile Muster in Audio-Daten erfassen. Feature Engineering bleibt der Schlüssel zur Verbesserung der Klassifizierung.",

        roadmap_title: "Die Roadmap",
        roadmap_item1:
          "Einbeziehung zusätzlicher Audio-Merkmale und Metadaten.",
        roadmap_item2:
          "Experimentieren mit rekurrenten (RNN) oder faltungsneuronalen (CNN) Architekturen.",
        roadmap_item3:
          "Bereitstellung einer Echtzeit-API zur Stimmungsvorhersage für Apps.",

        github_title: "Technische Implementierung & Quellcode",
        github_p:
          "Entdecken Sie die vollständige PyTorch-Implementierung und die Audio-Merkmalsanalyse auf GitHub.",
        github_btn: "REPOSITORY AUF GITHUB ANSEHEN",
        takeaway:
          "Fazit: Dieses Projekt unterstreicht meine Fähigkeit, Deep Learning auf komplexe Audiodaten für Multiklassen-Klassifizierungen anzuwenden.",
      },
      // project5
      sales_dashboard: {
        back_link: "Zurück zur Startseite",
        label: "Fallstudie: Datenvisualisierung & Dashboards",
        title: "Superstore Sales Dashboard",
        subtitle:
          "Umwandlung von Verkaufsdaten in handlungsrelevante Geschäftserkenntnisse mit Power BI.",
        location_tag: "Fallstudie: Interaktive Verkaufsleistungsanalyse",

        context_title: "Kontext",
        context_p:
          "Einzelhandelsunternehmen generieren große Datenmengen, aber die Umwandlung in klare operative Erkenntnisse ist oft schwierig. Das Verständnis von Trends ist essenziell für die Profitabilität.",

        objective_title: "Zielsetzung",
        objective_p:
          "Entwicklung eines interaktiven BI-Dashboards zur Analyse von Umsatz, Gewinn und Versandleistung, um Wachstumschancen und operative Potenziale zu identifizieren.",

        approach_title: "Methodik",
        approach_p:
          "Ich habe ein interaktives Dashboard in Power BI erstellt, wobei Power Query zur Transformation و DAX für KPIs genutzt wurden. Die Struktur erlaubt Drill-Downs in Kategorien und Regionen.",

        results_title: "Ergebnisse & Performance",
        impact_label: "Strategische Wirkung",
        impact_p:
          "Das Dashboard bietet einen klaren Überblick über Rentabilitätstrends und ermöglicht die schnelle Identifizierung von Top-Produkten sowie Faktoren wie Lieferverzögerungen.",
        tools_label: "Verwendete BI-Tools",

        insights_title: "Erkenntnisse & Roadmap",
        insight_label: "BI-Fallstudien-Erkenntnis",
        insight_p:
          "Diese Studie zeigt, wie dynamische Dashboards Rohdaten in praktische Erkenntnisse verwandeln. Der Wechsel von statischen Berichten zu Drill-Down-Ansichten ist entscheidend.",

        roadmap_title: "Die Roadmap",
        roadmap_item1:
          "Integration von Prognosemodellen für prädiktive Verkaufsanalysen.",
        roadmap_item2:
          "Hinzufügen fortgeschrittener Kundensegmentierung (RFM-Analyse).",
        roadmap_item3:
          "Anbindung von Live-Datenquellen für Echtzeit-Monitoring.",

        github_title: "Projekt-Repository & Dokumentation",
        github_p:
          "Entdecken Sie das vollständige Projekt auf GitHub, inklusive der Power BI-Quelldatei und der Datenreinigung.",
        github_btn: "REPOSITORY AUF GITHUB ANSEHEN",
        takeaway:
          "Fazit: Dieses Projekt unterstreicht meine Fähigkeit, Business Intelligence zu nutzen, um strategische Entscheidungen zu unterstützen.",
      },
    },
    legal: {
      back: "Zurück zur Startseite",
      title: "Impressum",
      id_title: "Identifikation",
      id_text:
        "Diese Website ist ein professionelles Portfolio, das von Sarah Sabouni betrieben wird. Es zeigt Fachwissen in den Bereichen Data Science, prädiktive Modellierung und KI-Lösungen. Der Inhalt dient Informationszwecken und stellt keine professionelle Beratung dar.",
      liability_title: "Haftung",
      liability_text:
        "Die Inhalte werden mit Sorgfalt gepflegt, aber wir haften nicht für die absolute Richtigkeit externer technischer Daten oder den Inhalt von Links Dritter.",
      ip_title: "Geistiges Eigentum",
      ip_text:
        "Alle präsentierten Analyse-Frameworks, benutzerdefinierten Code-Snippets und Datenvisualisierungen sind geistiges Eigentum von Sarah Sabouni, sofern nicht anders angegeben.",
      footer_contact: "Für berufliche Anfragen finden Sie mich auf",
    },
    privacy_page: {
      back_home: "Zurück zur Startseite",
      last_updated: "Zuletzt aktualisiert: April 2026",
      section1_title: "Datenerhebung",
      section1_text:
        "Dieses Portfolio ist eine statische Präsentation. Wir sammeln, speichern oder verfolgen keine persönlichen Daten unserer Besucher. Wenn Sie mich per E-Mail oder LinkedIn kontaktieren, werden Ihre Informationen nur zur Beantwortung Ihrer Anfrage verwendet.",
      section2_title: "Cookies & Tracking",
      section2_text:
        "Der Goldstandard: Diese Website verwendet keine Cookies. Wir verwenden keine Tracking-Pixel, Analyse-Skripte oder Technologien, die Ihr Verhalten überwachen.",
      section3_title: "Links zu Drittanbietern",
      section3_text:
        "Links zu LinkedIn, GitHub und Kaggle dienen der beruflichen Vernetzung. Sobald Sie die Seite verlassen, gelten die jeweiligen Datenschutzbestimmungen dieser Anbieter.",
    },
    error404: {
      title: "Datenpunkt nicht gefunden",
      message:
        "Die von Ihnen gesuchte Seite ist ein <span class='text-primary font-bold'>Ausreißer</span>. Sie wurde entweder verschoben oder existierte nie in unserem Datensatz.",
      btn: "ZURÜCK ZUR BASIS",
    },
  },
};

let currentLang = "en";

function switchLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = key
      .split(".")
      .reduce((obj, i) => (obj ? obj[i] : null), translations[lang]);

    if (translation) {
      if (typeof translation === "string" && translation.includes("<")) {
        el.innerHTML = translation;
      } else if (Array.isArray(translation)) {
        const listItems = el.querySelectorAll("li");
        translation.forEach((item, index) => {
          if (listItems[index]) {
            const textSpan = listItems[index].querySelector(
              "span:not(.rounded-full)",
            );
            if (textSpan) {
              textSpan.textContent = item;
            } else {
              listItems[index].textContent = item;
            }
          }
        });
      } else {
        el.textContent = translation;
      }
    }
  });

  const cvBtnHero = document.querySelector('[data-i18n="hero.download_cv"]');
  if (cvBtnHero)
    cvBtnHero.setAttribute("href", translations[lang].hero.cv_path);

  const cvBtnAbout = document.querySelector('[data-i18n="about.view_cv"]');
  if (cvBtnAbout)
    cvBtnAbout.setAttribute("href", translations[lang].about.cv_path);

  const path = window.location.pathname;

  if (path.includes("privacy")) {
    document.title = translations[lang].titles.privacy;
  } else if (path.includes("legal")) {
    document.title = translations[lang].titles.legal;
  } else if (path.includes("projects.html")) {
    document.title = translations[lang].titles.projects;
  } else if (path.includes("project1-casestudy")) {
    document.title = translations[lang].titles.project1;
  } else if (path.includes("project2-casestudy")) {
    document.title = translations[lang].titles.project2;
  } else if (path.includes("project3-casestudy")) {
    document.title = translations[lang].titles.project3;
  } else if (path.includes("project4-casestudy")) {
    document.title = translations[lang].titles.project4;
  } else if (path.includes("project5-casestudy")) {
    document.title = translations[lang].titles.project5;
  } else if (path.includes("404")) {
    document.title = translations[lang].titles.error404;
  } else {
    document.title = translations[lang].titles.home;
  }

  const updateLangUI = (idPrefix) => {
    const enBtn = document.getElementById(`${idPrefix}lang-en`);
    const deBtn = document.getElementById(`${idPrefix}lang-de`);

    if (enBtn && deBtn) {
      if (lang === "en") {
        enBtn.classList.add("font-bold", "text-white");
        enBtn.classList.remove("opacity-50", "font-medium");
        deBtn.classList.add("opacity-50", "font-medium");
        deBtn.classList.remove("font-bold", "text-white");
      } else {
        deBtn.classList.add("font-bold", "text-white");
        deBtn.classList.remove("opacity-50", "font-medium");
        enBtn.classList.add("opacity-50", "font-medium");
        enBtn.classList.remove("font-bold", "text-white");
      }
    }
  };

  updateLangUI("");
  updateLangUI("mobile-");

  localStorage.setItem("preferredLang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "en";
  switchLanguage(savedLang);
  document.documentElement.lang = lang;
});
