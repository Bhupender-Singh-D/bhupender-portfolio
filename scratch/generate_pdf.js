import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, '../public/Bhupender_Singh_Resume.pdf');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 45, left: 45, right: 45 },
  bufferPages: true
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

const primaryColor = '#000000';
const accentColor = '#1D4ED8'; // Professional Blue
const textDark = '#1F2937';
const textMuted = '#4B5563';
const lineGap = 2;

function drawSectionHeader(title) {
  doc.moveDown(0.4);
  const currentY = doc.y;
  
  doc.font('Helvetica-Bold')
     .fontSize(10)
     .fillColor(primaryColor)
     .text(title.toUpperCase(), 45, currentY);
     
  const lineY = doc.y + 2;
  doc.moveTo(45, lineY)
     .lineTo(doc.page.width - 45, lineY)
     .strokeColor('#2563EB')
     .lineWidth(0.75)
     .stroke();

  doc.moveDown(0.3);
}

// === PAGE 1 ===
// HEADER
doc.font('Helvetica-Bold')
   .fontSize(22)
   .fillColor(primaryColor)
   .text('BHUPENDER SINGH', { align: 'center' });

doc.moveDown(0.15);
doc.font('Helvetica-Bold')
   .fontSize(11)
   .fillColor(textDark)
   .text('FRONT-END DEVELOPER | WEB DESIGNER', { align: 'center' });

doc.moveDown(0.25);
doc.font('Helvetica')
   .fontSize(9)
   .fillColor(textDark)
   .text('+91 9015381011  |  bhupendernadal@gmail.com  |  Sahibzada Ajit Singh Nagar, Punjab, India', { align: 'center' });

doc.moveDown(0.15);
doc.font('Helvetica')
   .fontSize(9)
   .fillColor(accentColor)
   .text('LinkedIn  |  GitHub  |  Portfolio', { align: 'center' });

// PROFESSIONAL SUMMARY
drawSectionHeader('Professional Summary');

doc.font('Helvetica')
   .fontSize(9)
   .fillColor(textDark)
   .lineGap(lineGap)
   .text(
     'Front-End Developer and Web Designer with 2.8+ years of professional experience developing responsive websites and web interfaces. Hands-on experience with HTML5, CSS3, JavaScript, React.js, jQuery, Bootstrap 5, Tailwind CSS and WordPress, with UI design capability in Figma and Photoshop. Experienced in translating design requirements into responsive, mobile-first interfaces, building reusable React components, supporting website performance and SEO, and maintaining cross-browser compatibility. Collaborative and delivery-focused, with experience handling project requirements and production web work.',
     { align: 'justify' }
   );

// CORE TECHNICAL SKILLS
drawSectionHeader('Core Technical Skills');

const skills = [
  { label: 'Front-End Development', val: 'HTML5, CSS3, JavaScript (ES6+), React.js, jQuery' },
  { label: 'UI / CSS Frameworks', val: 'Tailwind CSS, Bootstrap 5, Responsive Web Design, Mobile-First Development' },
  { label: 'CMS / Web Platforms', val: 'WordPress' },
  { label: 'Design Tools', val: 'Figma, Adobe Photoshop, UI/UX Design, PSD/Figma to Web' },
  { label: 'Web Quality & Optimization', val: 'Cross-Browser Compatibility, Website Performance, Page Speed, SEO' },
  { label: 'Professional Tools', val: 'GitHub' }
];

skills.forEach(skill => {
  doc.font('Helvetica-Bold')
     .fontSize(8.8)
     .fillColor(textDark)
     .text(`${skill.label}: `, { continued: true })
     .font('Helvetica')
     .text(skill.val);
  doc.moveDown(0.12);
});

// PROFESSIONAL EXPERIENCE
drawSectionHeader('Professional Experience');

// Exp 1
doc.font('Helvetica-Bold')
   .fontSize(9.5)
   .fillColor(textDark)
   .text('Web Designer ', { continued: true })
   .font('Helvetica')
   .text('— KindleBit Solutions Pvt. Ltd. | 09/2024 – Present');

doc.moveDown(0.15);

const exp1Bullets = [
  'Develop responsive, mobile-first websites and web applications using HTML5, CSS3, Bootstrap 5, Tailwind CSS, JavaScript, jQuery, React.js and WordPress.',
  'Build reusable and interactive React.js components for dynamic, scalable and user-friendly interfaces.',
  'Translate design concepts and client requirements into responsive web pages with attention to usability, visual consistency and responsive behavior.',
  'Optimize website performance, page speed, SEO and cross-browser compatibility across modern browsers.',
  'Collaborate with team members to align UI design and development work with project requirements and delivery timelines.',
  'Refine interfaces based on feedback and performance observations to support usability and user satisfaction.'
];

exp1Bullets.forEach(bullet => {
  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(textDark)
     .text(`• ${bullet}`, { indent: 8, lineGap: 1.2 });
  doc.moveDown(0.08);
});

doc.moveDown(0.25);

// Exp 2
doc.font('Helvetica-Bold')
   .fontSize(9.5)
   .fillColor(textDark)
   .text('Web Designer ', { continued: true })
   .font('Helvetica')
   .text('— FinsinTech Pvt. Ltd. | 10/2023 – 06/2024');

doc.moveDown(0.15);

const exp2Bullets = [
  'Developed responsive and mobile-friendly websites using HTML5, CSS3, Bootstrap 5, Tailwind CSS, JavaScript, jQuery and WordPress.',
  'Implemented web interfaces from design references while maintaining responsive layouts and cross-browser compatibility.',
  'Created clean, user-friendly interfaces and supported website updates based on project and client requirements.',
  'Collaborated with team members to deliver assigned web design work within agreed timelines.'
];

exp2Bullets.forEach(bullet => {
  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(textDark)
     .text(`• ${bullet}`, { indent: 8, lineGap: 1.2 });
  doc.moveDown(0.08);
});

// SELECTED PROJECTS
drawSectionHeader('Selected Projects');

const p1 = {
  name: 'LumenCare / Lumen Healthcare',
  link: 'lumencare.com',
  desc: 'Healthcare services website providing vascular access, mobile radiology and dialysis services for healthcare facilities.',
  stack: 'HTML5, CSS3, JavaScript'
};
const p2 = {
  name: 'Insiders Health AI',
  link: 'insidershealth.ai',
  desc: 'AI-powered health-information product focused on personalized health insights, search workflows, AI-generated answers and custom health guides.',
  stack: 'Tailwind CSS, React.js, JavaScript, Responsive Web Design'
};
const p3 = {
  name: 'TruPaths',
  link: 'www.trupaths.com',
  desc: 'Recovery and healthcare navigation platform helping users explore verified treatment centers, detox, sober living, residential/outpatient care, therapy and related support.',
  stack: 'HTML5, CSS3, JavaScript, WordPress, Responsive UI'
};
const p4 = {
  name: 'Penguin Ice Cream',
  link: 'penguinicecream.com',
  desc: 'Responsive business website presenting ice cream products, cakes and pies, delivery information, gift cards, location and customer contact details.',
  stack: 'HTML, CSS, WordPress, Responsive Web Design'
};
const p5 = {
  name: 'Surch360',
  link: 'www.surch360.com',
  desc: 'Recruitment and workforce management platform supporting job discovery, candidate profiles, recruitment workflows and workforce-related processes.',
  stack: 'HTML, CSS, Tailwind CSS, React.js, JavaScript'
};

[p1, p2, p3].forEach(p => {
  doc.font('Helvetica-Bold')
     .fontSize(8.8)
     .fillColor(textDark)
     .text(`${p.name} `, { continued: true })
     .font('Helvetica')
     .fillColor(accentColor)
     .text(`| ${p.link}`);
  
  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(textDark)
     .text(`• ${p.desc}`, { indent: 8, lineGap: 1.2 });

  doc.font('Helvetica-Bold')
     .fontSize(8.5)
     .fillColor(textDark)
     .text(`• Technology Stack: `, { indent: 8, continued: true })
     .font('Helvetica')
     .text(p.stack);

  doc.moveDown(0.15);
});

// Add Page 2
doc.addPage();

// P4 - Penguin Ice Cream
doc.font('Helvetica-Bold')
   .fontSize(8.8)
   .fillColor(textDark)
   .text(`${p4.name} `, { continued: true })
   .font('Helvetica')
   .fillColor(accentColor)
   .text(`| ${p4.link}`);

doc.font('Helvetica')
   .fontSize(8.5)
   .fillColor(textDark)
   .text(`• ${p4.desc}`, { indent: 8, lineGap: 1.2 });

doc.font('Helvetica-Bold')
   .fontSize(8.5)
   .fillColor(textDark)
   .text(`• Technology Stack: `, { indent: 8, continued: true })
   .font('Helvetica')
   .text(p4.stack);

doc.moveDown(0.2);

// P5 - Surch360
doc.font('Helvetica-Bold')
   .fontSize(8.8)
   .fillColor(textDark)
   .text(`${p5.name} `, { continued: true })
   .font('Helvetica')
   .fillColor(accentColor)
   .text(`| ${p5.link}`);

doc.font('Helvetica')
   .fontSize(8.5)
   .fillColor(textDark)
   .text(`• ${p5.desc}`, { indent: 8, lineGap: 1.2 });

doc.font('Helvetica-Bold')
   .fontSize(8.5)
   .fillColor(textDark)
   .text(`• Technology Stack: `, { indent: 8, continued: true })
   .font('Helvetica')
   .text(p5.stack);

// EDUCATION
drawSectionHeader('Education');

doc.font('Helvetica-Bold')
   .fontSize(8.8)
   .fillColor(textDark)
   .text('Diploma in Web & Graphic Designing ', { continued: true })
   .font('Helvetica')
   .text('— Bepoj Technology | 2022 – 2023');

doc.moveDown(0.15);

doc.font('Helvetica-Bold')
   .fontSize(8.8)
   .fillColor(textDark)
   .text('12th ', { continued: true })
   .font('Helvetica')
   .text('— H.P.S.E.B. Dharamshala | 2020 – 2021');

// PROFESSIONAL DEVELOPMENT
drawSectionHeader('Professional Development');

doc.font('Helvetica-Bold')
   .fontSize(8.8)
   .fillColor(textDark)
   .text('Full Stack Software Developer Specialization ', { continued: true })
   .font('Helvetica')
   .text('— Coursera | In Progress');

// LANGUAGES
drawSectionHeader('Languages');

doc.font('Helvetica')
   .fontSize(8.8)
   .fillColor(textDark)
   .text('English | Hindi | Punjabi');

// Footers
const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);
  doc.font('Helvetica')
     .fontSize(8)
     .fillColor('#6B7280')
     .text(
       `Bhupender Singh | Front-End Developer / Web Designer | Page ${i + 1}`,
       45,
       doc.page.height - 30,
       { align: 'center', width: doc.page.width - 90 }
     );
}

doc.end();

writeStream.on('finish', () => {
  console.log(`Generated ${doc.bufferedPageRange().count} page PDF at:`, outputPath);
});
