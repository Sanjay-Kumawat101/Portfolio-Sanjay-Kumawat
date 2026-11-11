export const site = {
  name: 'Sanjay Kumawat',
  email: 'kumawatsanjay927@gmail.com',
  github: 'https://github.com/Sanjay-Kumawat101',
  leetcode: 'https://leetcode.com/u/EGjgP3bTcF/',
  resume: '/resume.pdf', // put your PDF at public/resume.pdf
  location: 'Mumbai, India',
  roles: ['Software Developer', 'AI/ML Enthusiast', 'Cloud Computing Explorer', 'Problem Solver'],
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || '',
}

export const nav = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export const skills = [
  ['Programming Languages', ['Java', 'Python', 'SQL']],
  ['Frontend', ['HTML', 'CSS', 'JavaScript', 'React']],
  ['Backend', ['Python', 'Flask', 'REST APIs']],
  ['AI & Machine Learning', ['Machine Learning', 'NLP', 'Generative AI', 'RAG', 'Pandas', 'NumPy', 'Scikit-learn']],
  ['Cloud & DevOps', ['Microsoft Azure', 'Google Cloud Platform', 'Docker', 'Git', 'GitHub Actions', 'Jenkins']],
  ['Databases & Tools', ['MySQL', 'ChromaDB', 'VS Code', 'Jupyter Notebook']],
]

export const projects = [
  {
    name: 'BhashaRAG', sub: 'Multilingual Document Intelligence', cat: 'AI/ML',
    desc: 'A multilingual document intelligence app built on Retrieval-Augmented Generation. Upload a document and ask questions in different languages.',
    features: ['PDF, DOCX and TXT support', 'Multilingual semantic search with sentence-transformer embeddings', 'Cross-language retrieval', 'Contextual answers using Google Gemini', 'English, Hindi, Marathi, Sanskrit and Haryanvi', 'Simple, Hinglish/Roman Regional and GenZ response styles', 'Optional source passages and similarity scores', 'Voice input and text-to-speech'],
    stack: ['Python', 'Streamlit', 'NLP', 'Sentence Transformers'],
    github: 'https://github.com/Sanjay-Kumawat101/multilingual-rag', demo: 'https://bhasha-rag.streamlit.app/',
  },
  {
    name: 'AI Vision', sub: 'Azure-Based Image Analysis', cat: 'Cloud',
    desc: 'A Flask web app that uses Microsoft Azure Computer Vision to analyze uploaded images and extract meaningful information.',
    features: ['Image description generation', 'Object detection', 'Image tagging', 'Azure Cognitive Services integration', 'Responsive web interface', 'API keys kept in environment variables and GitHub Secrets', 'Automated deployment with GitHub Actions to Azure App Service'],
    stack: ['Python', 'Flask', 'HTML', 'CSS', 'Jinja2', 'Azure Computer Vision', 'Azure App Service', 'GitHub Actions'],
    github: 'https://github.com/Sanjay-Kumawat101/image_recognition', demo: 'https://aivision-hmdvaafhbdhfawgc.eastus-01.azurewebsites.net/',
  },
  {
    name: 'MediConnect', sub: 'Healthcare Appointment & Management', cat: 'Web',
    desc: 'A healthcare web application that connects patients and doctors through one centralized digital platform.',
    features: ['Patient and doctor registration and authentication', 'Separate patient and doctor dashboards', 'Doctor availability management', 'Appointment scheduling', 'Medical history and record uploads', 'Health assessments and alerts', 'Future scope: AI-powered health insights'],
    stack: ['HTML', 'CSS', 'Vanilla JavaScript', 'Node.js', 'Express', 'Supabase', 'Google OAuth'],
    github: 'https://github.com/Sanjay-Kumawat101/MediConnect', demo: '',
  },
  {
    name: 'Career Predictor', sub: 'Machine Learning Application', cat: 'AI/ML',
    desc: 'A machine learning project that analyzes student-related information to provide career and placement predictions.',
    features: ['Dataset preprocessing', 'Exploratory data analysis', 'Model training', 'Feature encoding and scaling', 'Streamlit prediction interface'],
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/Sanjay-Kumawat101/student_career_path_predictor', demo: 'https://studentcareerpathpredictor.streamlit.app/',
  },
]

export const experience = [
  ['Cloud deployment', 'Built and deployed applications on Microsoft Azure and Google Cloud Platform.'],
  ['AI and NLP applications', 'Developed multilingual RAG and ML applications with embeddings and generative models.'],
  ['APIs and external services', 'Integrated REST APIs and AI services such as Azure Computer Vision and Google Gemini.'],
  ['Version control', 'Use Git and GitHub for day-to-day development and collaboration.'],
  ['CI/CD', 'Set up GitHub Actions workflows for automated deployment.'],
]

export const achievements = [
  { n: 110, suffix: '+', label: 'LeetCode problems solved' },
  { n: 40, suffix: '+', label: 'Day LeetCode practice streak' },
  { n: 4, suffix: '', label: 'Projects across AI, NLP, cloud and web' },
]
