# Software Requirements Specification (SRS)

## Overview
The purpose of this document is to define the functional and non-functional requirements for the job board application. This document serves as a comprehensive Software Requirements Specification (SRS), outlining the features and behavior expected from the system. It is intended for developers, project managers, and stakeholders to ensure that the application meets both user needs and performance standards.

---

## Software Requirements

### Functional Requirements

#### 1. User Authentication
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| FR1  | The system shall allow users to create an account by providing email, password, and username. |
| FR2  | The system shall allow users to log in using their email and password.      |
| FR3  | The system shall allow users to reset their password.                       |
| FR4  | The system shall allow users to update their account information.           |
| FR5  | The system shall notify users via email upon successful account creation or updates. |

#### 2. Job Postings
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| FR6  | Employers shall be able to create job postings by providing job title, description, salary, and location. |
| FR7  | Employers shall be able to edit or delete job postings they have created.   |
| FR8  | The system shall allow employers to duplicate an existing job posting for easier reposting. |
| FR9  | The system shall automatically archive job postings after a specified expiration date. |
| FR10 | Users shall be able to report inappropriate or misleading job postings.     |

#### 3. Job Search
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| FR11 | The system shall allow users to search for jobs using filters such as job type, location, salary range, and industry. |
| FR12 | The system shall display search results based on user input.                |
| FR13 | Users shall be able to save job searches and receive email notifications for matching new job listings. |
| FR14 | The system shall provide users with recommended jobs based on their browsing and application history. |
| FR15 | The system shall allow users to sort search results by relevance, date posted, or salary range. |

#### 4. Swiping Feature for Job Listings
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| FR16 | The system shall allow users to swipe through job listings, displaying a brief job description on each card. |
| FR17 | Users shall be able to swipe right to save a job to their favorites and swipe left to skip a job. |
| FR18 | Swiped jobs shall be removed from the swipe queue to avoid duplicate reviews. |
| FR19 | The swiping feature shall integrate with mobile gestures for enhanced user experience. |
| FR20 | The system shall display a summary of saved jobs from the swiping feature.  |

#### 5. Application Process
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| FR21 | The system shall allow users to apply for jobs directly through the platform. |
| FR22 | Users shall have the option to generate a customized resume for each application using GPT integration. |
| FR23 | The system shall allow users to attach additional documents, such as cover letters, during the application process. |
| FR24 | Employers shall receive notifications when a candidate applies for their job posting. |
| FR25 | Users shall be able to track the status of their job applications.          |

#### 6. Profile Creation
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| FR26 | The system shall allow users to create a detailed professional profile by entering personal details, skills, education, and work experience. |
| FR27 | The system shall enable users to upload a profile picture and attach additional documents, such as certifications or portfolios. |
| FR28 | The system shall allow users to make their profiles visible or hidden to employers based on their preferences. |
| FR29 | The system shall suggest profile improvements based on gaps in user-provided information. |
| FR30 | Users shall be able to export their profile data as a PDF or other supported formats. |

#### 7. Resume Generation with GPT
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| FR31 | The system shall allow users to generate a customized resume using GPT based on their profile information and selected job roles. |
| FR32 | The system shall provide multiple templates and formatting styles for resume customization. |
| FR33 | Users shall be able to edit the GPT-generated resumes before finalizing and submitting them. |
| FR34 | The system shall save multiple versions of generated resumes for user reference. |
| FR35 | The GPT integration shall provide contextual prompts to help users fine-tune their resumes for specific industries or roles. |

---

### Non-Functional Requirements

#### 1. Security
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| NFR1 | All user data shall be encrypted to protect personal information.           |
| NFR2 | The system shall comply with data handling and privacy standards.           |
| NFR3 | User sessions shall automatically expire after 15 minutes of inactivity.    |
| NFR4 | The system shall provide multi-factor authentication as an optional feature. |
| NFR5 | The system shall log and monitor suspicious activity to detect potential security breaches. |

#### 2. Performance
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| NFR6 | The system shall load job search results within 3 seconds under normal usage conditions. |
| NFR7 | The platform shall support 1,000 concurrent users without performance degradation. |
| NFR8 | Job postings shall be processed and uploaded within seconds for standard content size. |
| NFR9 | The swiping feature shall respond within 2 seconds of user action.          |
| NFR10| The system shall support file uploads up to 5MB in size.                    |

#### 3. Availability
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| NFR11| The system shall maintain 99.9% uptime to ensure reliability for users.     |
| NFR12| Scheduled maintenance periods shall be communicated to users at least 24 hours in advance. |
| NFR13| The system shall include failover mechanisms to ensure availability during server outages. |
| NFR14| The system shall provide a backup and recovery process to prevent data loss. |
| NFR15| A read-only mode shall be enabled during maintenance periods.               |

### 4. Usability
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| NFR16| The system shall provide a responsive design to ensure usability on both desktop and mobile devices.  |
| NFR17| Error messages shall be displayed in a clear and concise manner to guide users.  |
| NFR18| The user interface shall support keyboard and screen reader accessibility for ADA compliance.  |
| NFR19| The system shall include tooltips and help sections to assist users in navigating the platform. | 
| NFR20| The application shall maintain consistent design patterns and navigation across all features. |

### 5. Scalability
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| NFR21| The system shall scale horizontally to accommodate increasing user demand.  
| NFR22| The platform shall be designed to support future integration with third-party APIs.  
| NFR23| Database architecture shall be optimized to handle up to 1 million job postings without performance degradation.  
| NFR24| The system shall allow addition of new features without requiring significant changes to the core architecture.  
| NFR25| Cloud-based infrastructure shall be used to ensure easy scalability and resource allocation.

### 6. AI Performance and Integration
| ID   | Requirement                                                                 |
|------|-----------------------------------------------------------------------------|
| NFR26| The GPT-powered resume generator shall respond within 5 seconds for most user queries.  
| NFR27| The system shall support up to 1,000 concurrent GPT-based resume generation requests without noticeable performance degradation.  
| NFR28| The GPT model shall be hosted on scalable cloud infrastructure to ensure high availability and low latency.  
| NFR29| The system shall allow administrators to update or replace the GPT model to ensure compatibility with new AI features.  
| NFR30| The resume generator shall include built-in safeguards to prevent generation of inappropriate or unprofessional content.

---

# Change Management Plan

This section outlines how we will ensure that the application is compatible and seamlessly integrates with users' ecosystems, our plan to train and assist users in becoming proficient with the software, and our approach to communicating with users and addressing discovered issues.

---

### **How will you train people to use it?**

The team will train users, including developers, designers, and other interested parties, using a variety of accessible methods. These include:

1. **In-Person and Virtual Training Sessions**  
   The team will schedule in-person or video-conference training sessions upon request. These sessions will feature demonstrations and hands-on training to ensure users understand how the application works and how to maximize its benefits.

2. **Comprehensive “How-To” and Tutorial Page**  
   A dedicated "How-To" or "Tutorial" page will be created within the web application. This page will:
   - Provide written, step-by-step instructions.
   - Include annotated screenshots to guide first-time users.
   - Be designed for easy navigation to help users troubleshoot issues independently.

3. **GitHub Documentation**  
   Our GitHub repository will include a "How-To" or "Tutorial" section in the README file, featuring clear instructions for users familiar with the development environment.

4. **Video Walkthroughs**  
   The team will record a detailed walkthrough of the application and host the video on a popular streaming platform, such as YouTube. Links to the video will be prominently displayed on:
   - The application's "How-To" page.
   - The GitHub repository.

By providing multiple training formats, users will have flexible options to learn about the application in ways that suit their needs.

---

### **How will you ensure it integrates within their ecosystem/software?**

To ensure seamless integration with users' ecosystems, we will take the following steps:

1. **Usability and Compatibility Testing**  
   The team will perform thorough testing to confirm that the application works on a variety of browsers, devices, and operating systems. If users encounter compatibility or usability issues, we will prioritize resolving these in future patches and releases.

2. **User Acceptance Testing with Dedicated Groups**  
   We aim to partner with a small group of users from different organizations to:
   - Perform user-acceptance testing on development versions before deployment.
   - Provide feedback on functionality, usability, and integration experiences.
   - Monitor the application’s behavior and compatibility within real-world environments.

3. **Pre-Release Feedback and Iteration**  
   Users in the dedicated group will:
   - Have access to a private development version of the application.
   - Report issues via GitHub or scheduled meetings with the team.
   - Help shape enhancements and confirm fixes before production releases.

4. **Transparency on Updates**  
   To ensure users are always informed, we will:
   - Notify users of upcoming releases and changes through in-app pop-up notifications.
   - Provide detailed release notes and access to previous application versions through the navigation panel or footer.

By engaging closely with a dedicated user group and maintaining open communication, we will ensure smooth integration and high user satisfaction.

---

### **How will you ensure that any discovered issues are resolved?**

The team will implement several measures to provide robust technical support and effective issue resolution:

1. **Contact Form for Issue Reporting**  
   A contact page will allow users to submit issues through a form, which will include:
   - A dropdown menu to categorize common problem types.
   - A description box for detailed explanations.
   - Automatic forwarding of form data to the team email and database for analysis and tracking.

2. **Dedicated User Group for Early Issue Detection**  
   The small group of users performing user-acceptance tests will:
   - Have limited access to our GitHub repository for submitting issues directly.
   - Work closely with the team to propose solutions during feedback sessions.
   - Assist in ensuring issues are resolved before public production releases.

3. **Prioritization and Resolution of Issues**  
   Reported issues will be aggregated and categorized by:
   - Severity: Major bugs will take precedence over minor issues.
   - Frequency: Commonly reported issues will receive priority.
   We will focus on fixing critical issues through patches or new version releases.

4. **Rigorous Testing of Fixes**  
   Each patched update will undergo thorough testing within the development environment to confirm stability and usability before deployment.

5. **Transparency on Fixes**  
   Users will be notified of resolved issues through:
   - A pop-up message within the application.
   - Detailed change logs available on the "Updates" page.

Our approach ensures that issues are addressed promptly, users are kept informed, and future problems are minimized through proactive monitoring.

---

# Traceability Links

This section provides a traceability matrix for the use case diagrams, class diagrams, and activity diagrams in the system. For the use case diagrams, we outline each use case and clearly indicate which requirements it is linked to. Similarly, the class diagrams are connected to their respective requirements, ensuring a direct relationship between the system’s design and its functional expectations. Lastly, the activity diagrams are mapped by their name, the specific activities they represent, and the requirements they fulfill. This structured approach helps ensure every requirement is addressed within the design, creating a clear and logical connection between what the system needs to do and how it is designed to achieve it.

### Use Case Diagram Traceability
| Artifact ID | Artifact Name           | Requirement ID                              |
|-------------|--------------------------|---------------------------------------------|
| UC1         | Login/Logout                     | FR2, FR4, NFR3                              |
| UC2         | Update Profile                   | FR26, FR27, FR28                            |
| UC3         | Browse Jobs                      | FR11, FR12, FR14                            |
| UC4         | Swipe for Jobs                   | FR16, FR17, FR18, FR20                      |
| UC5         | Generate Resume                  | FR22, FR31, FR32, FR33, FR35                |
| UC6         | Submit Application               | FR21, FR23, FR24, FR25                      |
| UC7         | View Application Status          | FR25                                        |
| UC8         | Reporting Job Postings           | FR10                                        |
| UC9         | Integration with Third-Party APIs| NFR22

---

### Activity Diagram Traceability
| Artifact ID   | Artifact Name               | Requirement ID                              |
|---------------|------------------------------|---------------------------------------------|
| AD1           | User Login Activity         | FR2, FR3, FR4, NFR3                        |
| AD2           | Swipe Through Jobs          | FR16, FR17, FR18, FR20                     |
| AD3           | Update Profile Activity     | FR26, FR27, FR28, FR29                     |
| AD4           | Generate Resume with GPT    | FR22, FR31, FR32, FR35                     |
| AD5           | Submit Job Application      | FR21, FR23, FR24, FR25                     |
| AD6           | View Jobs Activity          | FR11, FR12, FR14, NFR6                     |
| AD7           | Reporting Job Postings      | FR10                                        |
| AD8           | Scheduled Maintenance       | NFR12                                       |
| AD9           | Backup and Recovery Process | NFR14
---

### Sequence Diagram Traceability
| Artifact ID   | Artifact Name               | Requirement ID                              |
|---------------|------------------------------|---------------------------------------------|
| SD1           | User Login Sequence         | FR2, FR4, NFR3                              |
| SD2           | Swipe Feature Interaction   | FR16, FR17, FR18, FR20                     |
| SD3           | Profile Update Sequence     | FR26, FR27, FR28, FR29                     |
| SD4           | Resume Generation Workflow  | FR22, FR31, FR32, FR35                     |
| SD5           | Application Submission Sequence | FR21, FR23, FR24, FR25                    |
| SD6           | Profile Export Workflow     | FR30                                        |
| SD7           | Multi-Factor Authentication | NFR4

---

# Software Artifacts

This section contains the links to all of the use case diagrams, class diagrams, and activity diagrams. 

- [Use Case Diagram](https://github.com/harshithgvsu/GVSU-CIS641-Swipe-and-Wipe/blob/main/docs/UseCaseDiagram.png)
- [Class Diagram](https://github.com/harshithgvsu/GVSU-CIS641-Swipe-and-Wipe/blob/main/docs/Class%20Diagram.png)
- [Activity Diagram](https://github.com/harshithgvsu/GVSU-CIS641-Swipe-and-Wipe/blob/main/docs/ActivityDiagram.png)

