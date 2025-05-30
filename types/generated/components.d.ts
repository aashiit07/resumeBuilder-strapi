import type { Schema, Struct } from '@strapi/strapi';

export interface AchievementsAchievements extends Struct.ComponentSchema {
  collectionName: 'components_achievements_achievements';
  info: {
    displayName: 'achievements';
    icon: 'dashboard';
  };
  attributes: {
    descachievement: Schema.Attribute.String;
    titleachievement: Schema.Attribute.String;
  };
}

export interface CertificatesCertificates extends Struct.ComponentSchema {
  collectionName: 'components_certificates_certificates';
  info: {
    displayName: 'certificates';
    icon: 'calendar';
  };
  attributes: {
    certificateName: Schema.Attribute.String;
    certificateURL: Schema.Attribute.String;
    issueDate: Schema.Attribute.String;
    issuedBy: Schema.Attribute.String;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    description: '';
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    cgpa: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    description: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    universityName: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    description: '';
    displayName: 'experience';
    icon: 'briefcase';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummery: Schema.Attribute.Text;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'stack';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'achievements.achievements': AchievementsAchievements;
      'certificates.certificates': CertificatesCertificates;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'skills.skills': SkillsSkills;
    }
  }
}
