````mermaid
flowchart TB
    A[Homepage] --> B[Login/Register]
    B --> C[Dashboard]

    %% Notifications Section
    C --> N[Notifications]
    N --> N1[Job Alerts]
    N --> N2[Application Updates]
    N --> N3[New Messages]
    N --> N4[Community Updates]
    N --> N5[System Notifications]

    %% Job Search (No login needed to view jobs)
    A --> D1[Browse Job Postings]
    A --> D2[Search Jobs]
    A --> I3[BlueBoard Agency Reviews]
    A --> H2[KudoZ Term Help]

    C --> D[Find Jobs]
    D --> D1
    D --> D2
    D --> D3[Set Job Alerts]
    D1 --> D4[View Job Details]
    D2 --> D4
    D3 --> D4
    D4 --> D5[Apply for Job]
    D5 --> D6[Submit Application]

    %% Job Posting
    C --> E[Post Jobs]
    E --> E1[Create Job Posting]
    E1 --> E2[Set Requirements]
    E2 --> E3[Define Budget/Rate]
    E3 --> E4[Publish Job]
    E4 --> E5[Manage Applications]
    E5 --> E6[Contact Applicants]

    %% Profile Management
    C --> F[Profile Management]
    F --> F1[Update Professional Info]
    F --> F2[Portfolio/Work Samples]
    F --> F3[Language Pairs]
    F --> F4[Specializations]
    F --> F5[Rates]
    F --> F6[Credentials/Certifications]

    %% Translator Directory
    C --> G[Directory]
    G --> G1[Browse Translators]
    G --> G2[Search by Criteria]
    G1 --> G3[View Translator Profiles]
    G2 --> G3
    G3 --> G4[Contact Translator]

    %% Community Section
    C --> H[Community]
    H --> H1[Forums]
    H --> H2[KudoZ Term Help]
    H --> H3[Translation Events]

    %% Tools
    C --> I[Tools]
    I --> I1[Translation Workspace]
    I --> I2[Term Search]
    I --> I3[BlueBoard Agency Reviews]

    %% ProZ Minitz (New Feature)
    C --> J[ProZ Minitz]
    J --> J1[Interpreter Calls]
    J --> J2[Language Learning]
    J --> J3[Cultural Consultancy]

    %% AI Helper - FindAi
    A --> K[FindAi]
    C --> K
    K --> K1[Browse Site Content]
    K --> K2[Fetch Jobs from Upwork & LinkedIn]
    K --> K3[Search & Recommendations]

    %% Nakodo Integration
    C --> L[Nakodo]
    L --> L1[Match with Clients]
    L --> L2[Find Translators]
    L --> L3[Manage Nakodo Profile]

    ```
````
