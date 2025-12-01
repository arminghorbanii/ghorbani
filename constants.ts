import { Chapter } from './types';

export const CURRICULUM: Chapter[] = [
  {
    id: 'intro',
    title: 'فصل ۱: شروع کار با پایتون',
    lessons: [
      {
        id: 'what-is-python',
        title: 'پایتون چیست؟',
        description: 'آشنایی با زبان برنامه‌نویسی پایتون و کاربردهای آن.',
        content: [
          {
            type: 'text',
            content: 'پایتون (Python) یک زبان برنامه‌نویسی سطح بالا، تفسیر شده و همه منظوره است. این زبان به خاطر خوانایی بالای کدها و سادگی یادگیری شهرت دارد.'
          },
          {
            type: 'note',
            content: 'پایتون در سال ۱۹۹۱ توسط خودو فان روسوم (Guido van Rossum) طراحی شد.'
          },
          {
            type: 'text',
            content: 'با پایتون می‌توانید کارهای زیر را انجام دهید:'
          },
          {
            type: 'list',
            content: [
              'توسعه وب (Web Development)',
              'علم داده (Data Science)',
              'هوش مصنوعی (AI)',
              'خودکارسازی (Automation)'
            ]
          }
        ]
      },
      {
        id: 'hello-world',
        title: 'اولین برنامه شما',
        description: 'نوشتن برنامه معروف Hello World در پایتون.',
        content: [
          {
            type: 'text',
            content: 'در پایتون، برای چاپ کردن متن روی صفحه نمایش از دستور `print` استفاده می‌کنیم. بیایید اولین برنامه خود را ببینیم.'
          },
          {
            type: 'code',
            content: {
              language: 'python',
              code: 'print("Hello, Armin!")',
              output: 'Hello, Armin!'
            }
          },
          {
            type: 'text',
            content: 'متنی که می‌خواهید چاپ شود باید داخل پرانتز و بین کوتیشن " " قرار بگیرد.'
          }
        ]
      }
    ]
  },
  {
    id: 'basics',
    title: 'فصل ۲: مفاهیم پایه',
    lessons: [
      {
        id: 'variables',
        title: 'متغیرها (Variables)',
        description: 'چگونه داده‌ها را در حافظه ذخیره کنیم.',
        content: [
          {
            type: 'text',
            content: 'متغیرها مثل ظرف‌هایی هستند که داده‌ها را نگه می‌دارند. در پایتون نیازی نیست نوع متغیر را از قبل تعریف کنید.'
          },
          {
            type: 'code',
            content: {
              language: 'python',
              code: 'name = "Armin"\nage = 25\n\nprint(name)\nprint(age)',
              output: 'Armin\n25'
            }
          },
          {
            type: 'note',
            content: 'نام متغیرها نمی‌تواند با عدد شروع شود و نباید شامل فاصله باشد (از _ استفاده کنید).'
          }
        ]
      },
      {
        id: 'data-types',
        title: 'انواع داده',
        description: 'آشنایی با اعداد، رشته‌ها و مقادیر منطقی.',
        content: [
          {
            type: 'text',
            content: 'داده‌های اصلی در پایتون شامل موارد زیر هستند:'
          },
          {
            type: 'list',
            content: [
              'رشته (String): متن‌ها مثل "سلام"',
              'عدد صحیح (Integer): اعداد بدون اعشار مثل 10',
              'عدد اعشاری (Float): اعداد با نقطه اعشار مثل 3.14',
              'بولی (Boolean): درست (True) یا غلط (False)'
            ]
          },
          {
            type: 'code',
            content: {
              language: 'python',
              code: 'x = 10       # int\ny = 3.14     # float\nz = "Python" # str\nis_active = True # bool\n\nprint(type(x))\nprint(type(y))',
              output: "<class 'int'>\n<class 'float'>"
            }
          }
        ]
      }
    ]
  },
  {
    id: 'control-flow',
    title: 'فصل ۳: کنترل جریان',
    lessons: [
      {
        id: 'if-else',
        title: 'شرط‌ها (If/Else)',
        description: 'تصمیم‌گیری در برنامه.',
        content: [
          {
            type: 'text',
            content: 'با استفاده از `if` می‌توانیم شرط بگذاریم. توجه کنید که در پایتون تورفتگی (Indentation) بسیار مهم است.'
          },
          {
            type: 'code',
            content: {
              language: 'python',
              code: 'score = 85\n\nif score >= 50:\n    print("قبول شدید")\nelse:\n    print("مردود شدید")',
              output: 'قبول شدید'
            }
          }
        ]
      },
      {
        id: 'loops',
        title: 'حلقه‌ها (Loops)',
        description: 'تکرار دستورات با for و while.',
        content: [
          {
            type: 'text',
            content: 'حلقه `for` برای تکرار روی یک مجموعه (مثل لیست یا رشته) استفاده می‌شود.'
          },
          {
            type: 'code',
            content: {
              language: 'python',
              code: 'fruits = ["sib", "moz", "anar"]\n\nfor fruit in fruits:\n    print(fruit)',
              output: 'sib\nmoz\nanar'
            }
          }
        ]
      }
    ]
  }
];
