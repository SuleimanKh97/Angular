import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // Define team members for the about page
  teamMembers = [
    {
      name: 'أحمد الراشد',
      position: 'المدير التنفيذي',
      image: 'assets/images/team/team1.jpg',
      description: 'خبير في مجال التجارة الإلكترونية ورائد أعمال مع أكثر من 10 سنوات خبرة في القطاع.',
      social: {
        twitter: '#',
        linkedin: '#',
        facebook: '#'
      }
    },
    {
      name: 'سارة العتيبي',
      position: 'رئيس قسم التسويق',
      image: 'assets/images/team/team2.jpg',
      description: 'متخصصة في التسويق الرقمي وإدارة العلامات التجارية مع شغف في تطوير الأعمال الإسلامية.',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'عبدالله الشمري',
      position: 'رئيس قسم التكنولوجيا',
      image: 'assets/images/team/team3.jpg',
      description: 'مطور ومهندس برمجيات ذو خبرة في بناء منصات التجارة الإلكترونية متعددة المستخدمين.',
      social: {
        twitter: '#',
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'نورة المهيري',
      position: 'مديرة خدمة العملاء',
      image: 'assets/images/team/team4.jpg',
      description: 'متخصصة في تحسين تجربة العملاء وإدارة فريق الدعم لتوفير خدمة متميزة.',
      social: {
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  // Define partners
  partners = [
    { name: 'بنك الراجحي', logo: 'assets/images/partners/partner1.png' },
    { name: 'هيئة الغذاء والدواء', logo: 'assets/images/partners/partner2.png' },
    { name: 'شركة أرامكس', logo: 'assets/images/partners/partner3.png' },
    { name: 'وزارة التجارة', logo: 'assets/images/partners/partner4.png' },
    { name: 'الهيئة السعودية للمواصفات', logo: 'assets/images/partners/partner5.png' },
    { name: 'مصرف الإنماء', logo: 'assets/images/partners/partner6.png' }
  ];
}
