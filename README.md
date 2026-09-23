# MAAK: Learn & Grow

MAAK — Complete UI/UX Specification for Lovable

1. ROLE

You are a senior UI/UX designer and frontend architect.

Design and implement the frontend UI for MAAK, a modern educational marketplace that connects university students who want to teach with school students and their parents.

The goal is to create a polished, production-quality frontend prototype using:

Next.js

TypeScript

Tailwind CSS

shadcn/ui

Lucide icons

Responsive design

Component-based architecture

The backend will later be implemented separately with NestJS and a REST API. For now, focus on the frontend UI/UX and use realistic mock data.

Do not build a backend.

2. PRODUCT CONCEPT

MAAK is an educational marketplace.

University students can become teachers and create public educational courses.

Parents create accounts for themselves and create profiles for their children.

Parents purchase public courses.

Once a parent purchases a course, that course becomes available to all children belonging to that parent account.

Important:

A school student cannot create an account independently.

The four roles are:

Teacher — university student who creates courses.

Parent — customer/account owner who creates children and purchases courses.

Student — child profile created by a parent.

Administrator — manages the platform.

The MVP focuses ONLY on:

Public recorded courses

Course discovery

Course creation

Course content

Course purchasing

Payment UI

Parent/child management

Course access

Learning progress

Administration

Teacher dashboards

Do NOT implement in this version:

Private tutoring sessions

Video meetings

Messaging/chat

Subscription plans

AI tutor

Mobile native application

Advanced recommendation engine

Complex social features

These should only appear in a "Future developments" section if needed.

3. DESIGN REFERENCES

Use existing platforms as UX inspiration, but DO NOT copy their branding, exact layouts, text, colors, or proprietary visual identity.

MAAK must have its own visual identity.

Use the following references strategically:

Udemy — marketplace inspiration

Use Udemy as inspiration for:

Course discovery

Course cards

Course catalogue

Search

Filters

Course detail/sales page

Course pricing

Teacher information

"My learning" concept

Reference:

https://www.udemy.com/

The MAAK course marketplace should feel familiar like a modern course marketplace.

Teachable — teacher/course creator inspiration

Use Teachable as inspiration for:

Teacher dashboard

Course creation workflow

Course editor

Course sections

Lesson organization

Course publishing workflow

Course pricing

Creator statistics

Reference:

https://teachable.com/

The teacher should feel like a creator managing educational products.

Thinkific — learning experience inspiration

Use Thinkific as inspiration for:

Course player

Lesson navigation

Progress indicators

Course curriculum

Student learning dashboard

Lesson completion

Educational content organization

Reference:

https://www.thinkific.com/

The learning interface should be clean and distraction-free.

Moodle — LMS and administration inspiration

Use Moodle as inspiration for:

Educational hierarchy

Course/lesson organization

Teacher/student roles

Administration concepts

Progress tracking

Course management

Reference:

https://moodle.org/

Do NOT copy Moodle's old-fashioned visual style.

MAAK should look significantly more modern.

shadcn/ui — component inspiration

Use shadcn/ui as the foundation for:

Buttons

Inputs

Forms

Dialogs

Dropdowns

Tabs

Cards

Tables

Badges

Alerts

Progress

Sheet/sidebar

Toasts

Select

Checkbox

Radio groups

Command/search

Skeleton loaders

Reference:

https://ui.shadcn.com/

Prefer shadcn components over custom components whenever a suitable component exists.

4. GENERAL VISUAL DIRECTION

MAAK should feel:

Modern

Educational

Trustworthy

Friendly

Professional

Clean

Premium but affordable

Easy for parents to understand

Attractive to young students

Professional enough for university teachers

Avoid:

Excessive gradients

Excessive glassmorphism

Huge animations

Cluttered dashboards

Excessive rounded elements

Too many colors

Generic AI-generated landing pages

Corporate banking aesthetics

Use generous whitespace.

Use subtle borders and shadows.

Use cards strategically.

Use clear visual hierarchy.

5. COLOR SYSTEM

Create a MAAK design system.

Suggested palette:

Primary:

#2563EB

Secondary:

#14B8A6

Background:

#F8FAFC

Foreground:

#0F172A

Muted:

#64748B

Success:

#22C55E

Warning:

#F59E0B

Error:

#EF4444

However, structure the colors using CSS variables/design tokens so they can easily be changed later.

Do not hardcode colors throughout individual components.

6. TYPOGRAPHY

Use a modern font such as:

Inter

or

Plus Jakarta Sans.

Typography should have a strong hierarchy:

H1: 40–48px desktop

H2: 30–36px

H3: 22–26px

Body: 15–16px

Small text: 13–14px

On mobile, scale headings appropriately.

7. RESPONSIVE DESIGN

The application must be fully responsive.

Desktop:

Sidebar dashboards

Multi-column course grids

Large course hero sections

Tablet:

Reduced grid columns

Collapsible sidebar

Mobile:

Compact header

Mobile navigation

Single-column course cards

Bottom navigation where appropriate

Course player adapted to small screens

Do not simply shrink the desktop interface.

Design mobile layouts intentionally.

8. GLOBAL COMPONENTS

Create reusable components.

Navigation

Components:

PublicNavbar

DashboardSidebar

MobileNavbar

Breadcrumbs

UserMenu

NotificationBell

UI components

Use shadcn/ui:

Button

Input

Textarea

Select

Checkbox

RadioGroup

Dialog

Drawer

Sheet

Tabs

Card

Badge

Avatar

DropdownMenu

Tooltip

Alert

Progress

Skeleton

Table

Pagination

Separator

Accordion

Command

9. COURSE COMPONENTS

Create reusable course components:

CourseCard

CourseGrid

CourseHero

CourseRating

CoursePrice

CourseInstructor

CourseCurriculum

CourseSection

LessonItem

CourseProgress

CoursePlayer

CourseResource

CourseFilters

CourseSearch

CourseCard inspiration

Use Udemy as the primary inspiration.

Card should contain:

Thumbnail

Course title

Teacher

Subject

School level

Rating

Number of lessons

Price

Optional discount

CTA

Do not copy Udemy's exact card design.

10. PUBLIC PAGES

PAGE 1 — Landing Page

Route:

/

Primary inspiration:

Udemy + Teachable, but create an original MAAK landing page.

Navbar

Left:

MAAK logo

Center:

Courses

Subjects

How it works

Right:

Login

Create account

Primary CTA:

"Explore courses"

Secondary CTA:

"Become a teacher"

Hero section

Message:

"Learn more. Spend less. Grow together."

Supporting text:

"Discover affordable courses created by university students and help every learner progress at their own pace."

Buttons:

[ Explore courses ]

[ Become a teacher ]

Use a clean educational illustration rather than a generic business illustration.

Statistics

Example placeholders:

500+ Courses

200+ Teachers

1,500+ Learners

20+ Subjects

Clearly treat these as mock data.

Popular courses

Primary inspiration:

Udemy

Use CourseCard components.

Display:

4–6 courses.

Include:

Category tabs

Course cards

View all button

Subjects

Use visually distinct subject cards.

Examples:

Mathematics

Physics

Chemistry

Biology

English

French

Computer Science

Programming

How MAAK works

Three steps:

Find a course

Learn

Progress

Use simple icons and illustrations.

Become a teacher CTA

Primary inspiration:

Teachable

Explain:

"Turn your knowledge into an opportunity."

CTA:

[ Become a teacher ]

Parent-focused section

This is a MAAK-specific feature.

Explain:

"One account. Multiple children. Shared learning."

Show:

Parent account

↓

Child 1

Child 2

Child 3

↓

Purchased course available to all children.

This should visually communicate MAAK's unique parent/child model.

Footer

Include:

MAAK

Courses

Subjects

Become a teacher

About

Contact

Terms

Privacy

11. COURSE CATALOGUE

Route:

/courses

Primary inspiration:

Udemy

Layout:

Desktop:

Left sidebar filters.

Right course results.

Top:

Search bar.

Sort dropdown.

Course count.

Filters

School level:

Primary

Middle school

High school

Subject:

Mathematics

Physics

Chemistry

English

French

Biology

Computer Science

Price:

Free

0–20 DT

20–50 DT

50+ DT

Rating.

Course cards

Use CourseCard.

Add pagination.

Add empty state.

Add loading skeleton.

Add error state.

12. COURSE DETAILS

Route:

/courses/[id]

Primary inspiration:

Udemy + Thinkific

Hero:

Course thumbnail

Title

Short description

Rating

Teacher

Number of lessons

Duration

School level

Subject

Price

CTA:

[ Buy course ]

What you will learn

Use check-list items.

Example:

✓ Understand algebraic equations

✓ Solve exercises

✓ Prepare for exams

Course curriculum

Primary inspiration:

Thinkific + Moodle

Accordion:

Section 1

Lesson 1

Lesson 2

Lesson 3

Section 2

Lesson 1

Lesson 2

Locked lessons should show a lock icon.

Teacher section

Primary inspiration:

Udemy

Show:

Avatar

Name

University

Field

Description

Rating

Number of courses

Button:

[ View teacher ]

Reviews

Display mock reviews.

Use shadcn cards.

13. TEACHER PROFILE

Route:

/teachers/[id]

Primary inspiration:

Udemy instructor profile

Display:

Profile image

Name

University

Field

Academic level

Biography

Subjects

Rating

Number of courses

Then:

"Courses by this teacher"

Use CourseGrid.

14. AUTHENTICATION

Routes:

/login

/register

/forgot-password

Primary inspiration:

Modern SaaS authentication rather than Moodle.

Use a centered authentication card.

15. LOGIN

Display:

MAAK logo

"Welcome back"

Email

Password

Forgot password

[ Login ]

Divider:

OR

[ Continue with Google ]

Link:

"Don't have an account? Create one"

Do not display Student registration.

16. REGISTRATION

First screen:

"Create your MAAK account"

Options:

[ Parent ]

[ University student / Teacher ]

Do NOT show:

Student.

Because students cannot independently register.

17. PARENT REGISTRATION

Fields:

First name

Last name

Email

Phone

Password

Confirm password

After registration:

show onboarding:

"Create your first child profile."

Fields:

Child name

Date of birth

School level

Optional avatar

Buttons:

[ Create child ]

[ Skip for now ]

18. PARENT DASHBOARD

Route:

/parent/dashboard

Primary inspiration:

Thinkific student dashboard + custom MAAK parent experience

This dashboard should prioritize children rather than generic account statistics.

Header:

"Good morning, Ahmed 👋"

Children cards

Each child card:

Avatar

Name

School level

Number of courses

Overall progress

Button:

[ View progress ]

Recent learning

Display courses with:

Course title

Child

Progress

Last activity

Continue button

Quick actions

Explore courses

Add child

View orders

19. PARENT SIDEBAR

Items:

Dashboard

Children

My Courses

Browse Courses

Orders & Payments

Notifications

Separator

Profile

Settings

Logout

20. CHILD MANAGEMENT

Route:

/parent/children

Primary inspiration:

Custom MAAK

Show:

"My Children"

Button:

[ + Add child ]

Each child:

Avatar

Name

School level

Number of courses

Progress

Actions:

View

Edit

21. CHILD PROFILE / LEARNING VIEW

Route:

/parent/children/[id]

Important:

This is NOT a separate account.

The parent is viewing the child's learning profile.

Show:

Child name

School level

Overall progress

Course list.

Example:

Mathematics

85%

Physics

60%

English

90%

Use Progress components.

22. MY COURSES

Route:

/parent/courses

Primary inspiration:

Thinkific

Important MAAK behavior:

The course belongs to the parent account and can be used by all children.

Show:

Course title

Children with access

Progress per child

Continue button.

Example:

Mathematics — Algebra

Available for:

✓ Youssef

✓ Sara

23. CHECKOUT

Route:

/checkout/[courseId]

Primary inspiration:

Teachable + modern SaaS checkout

Keep it extremely simple.

Left:

Course summary.

Right:

Order summary.

Important MAAK-specific section:

"Course access"

Display:

☑ Youssef

☑ Sara

Explain:

"This course will be available to all children in your account."

However, the system should still automatically grant access to all current children according to the business rule.

Show:

Course price

Payment method

Total

[ Pay now ]

24. PAYMENT STATES

Create separate UI states for:

Payment pending

"Your payment is being processed."

Payment successful

"Payment successful!"

"Your course is now available to your children."

CTA:

[ Start learning ]

Payment failed

"Your payment could not be completed."

Buttons:

[ Try again ]

[ Return to course ]

Payment cancelled

"Payment was cancelled."

25. COURSE PLAYER

Route:

/learn/[courseId]

Primary inspiration:

Thinkific

This should be the most focused learning interface.

Desktop:

Left:

Course curriculum.

Right:

Lesson content.

Top:

Course title + progress.

Video area.

Below:

Lesson description.

Resources.

Buttons:

[ Previous ]

[ Mark as completed ]

[ Next ]

Curriculum sidebar

Sections with accordions.

Completed lessons:

✓

Current lesson:

highlighted.

Locked lessons:

🔒

26. LESSON CONTENT

Support UI for:

Video

PDF

Document

Text

Quiz placeholder

Do not build a complex video streaming backend.

Use mock video/media for the prototype.

27. PROGRESS

Primary inspiration:

Thinkific

Show:

75%

15 / 20 lessons

Progress bar.

Completion should feel satisfying but not gamified excessively.

28. TEACHER DASHBOARD

Route:

/teacher/dashboard

Primary inspiration:

Teachable

Header:

"Welcome back, Ahmed 👋"

Stats:

Courses

Students

Revenue

Pending courses

My courses

Table/card view:

Course

Status

Students

Revenue

Actions

Statuses:

Draft

Pending review

Published

Rejected

29. TEACHER SIDEBAR

Dashboard

My Courses

Create Course

Students

Sales

Notifications

Profile

Settings

Logout

30. CREATE COURSE

Route:

/teacher/courses/new

Primary inspiration:

Teachable course builder

Use a multi-step wizard.

Steps:

Information

Curriculum

Content

Pricing

Preview

Submit

Show progress at the top.

31. COURSE INFORMATION

Fields:

Course title

Description

Subject

School level

Thumbnail

Learning objectives

Use shadcn forms.

32. CURRICULUM BUILDER

Primary inspiration:

Teachable + Thinkific

Display:

Section 1

Lesson 1

Lesson 2

Lesson 3

[ + Add lesson ]

[ + Add section ]

Allow:

Rename

Reorder

Delete

Edit

Use drag-and-drop if practical, but don't sacrifice usability.

33. LESSON EDITOR

Lesson types:

Video

PDF

Document

Text

Quiz

Use tabs or a clean type selector.

Video:

Upload area.

PDF:

Upload area.

Text:

Rich text editor.

Quiz:

Simple question editor.

34. COURSE PRICING

Display:

Course price

Platform fee

Teacher earnings

Use realistic mock values.

Do not hardcode a final MAAK commission percentage.

35. COURSE PREVIEW

Show the teacher exactly how the public course page will look.

Use the same Course Details components.

Button:

[ Submit for review ]

36. COURSE STATUS

Teacher should clearly see:

Draft

Pending review

Published

Rejected

If rejected:

Show administrator feedback.

37. TEACHER SALES

Route:

/teacher/sales

Primary inspiration:

Teachable creator dashboard

Show:

Total revenue

Courses sold

Recent transactions

Course performance.

Use charts only where useful.

Don't create excessive analytics for the MVP.

38. ADMIN DASHBOARD

Route:

/admin/dashboard

Primary inspiration:

Moodle administration concepts + modern SaaS admin dashboards

Do NOT copy Moodle's UI.

Use modern shadcn dashboard components.

Stats:

Total users

Parents

Teachers

Students

Courses

Pending courses

Orders

Revenue

39. ADMIN SIDEBAR

Dashboard

Users

Courses

Pending Courses

Orders

Payments

Subjects

Categories

School Levels

Reports

Audit Logs

Settings

Logout

40. ADMIN USER MANAGEMENT

Route:

/admin/users

Use shadcn DataTable.

Columns:

Name

Email

Role

Status

Created

Actions

Filters:

Role

Status

Search

41. ADMIN COURSE MANAGEMENT

Route:

/admin/courses

Data table:

Course

Teacher

Subject

Level

Status

Created

Actions

Statuses:

Draft

Pending

Published

Rejected

Suspended

42. ADMIN COURSE REVIEW

Route:

/admin/courses/pending/[id]

Primary inspiration:

Moodle moderation concepts + modern admin UX

Admin can:

Preview course

Inspect teacher

Inspect course content

Approve

Reject

Reject dialog:

Reason textarea.

Button:

[ Reject course ]

43. ADMIN ORDERS

Route:

/admin/orders

Use DataTable.

Columns:

Order ID

Parent

Course

Amount

Payment status

Date

44. ADMIN PAYMENTS

Route:

/admin/payments

Statuses:

Pending

Successful

Failed

Cancelled

Refunded

Use badges.

Payment details should be accessible through a dialog/drawer.

45. ADMIN TAXONOMY MANAGEMENT

Routes:

/admin/subjects

/admin/categories

/admin/school-levels

Allow administrators to:

Create

Edit

Disable

Delete where safe

Use tables and dialogs.

46. NOTIFICATIONS

Use a notification bell.

Primary inspiration:

Modern SaaS dashboards.

Examples:

"Your course has been approved."

"Your payment was successful."

"Your course is now available."

Do NOT build messaging/chat.

47. EMPTY STATES

Every major page needs an intentional empty state.

Examples:

Parent has no children:

"You haven't added a child yet."

[ Add child ]

Teacher has no courses:

"Create your first course."

[ Create course ]

No purchases:

"You haven't purchased any courses yet."

[ Explore courses ]

Admin has no pending courses:

"Everything is up to date."

48. LOADING STATES

Use shadcn Skeleton components.

Never display an empty white screen while data is loading.

Create skeletons for:

Course cards

Dashboard cards

Tables

Course details

Course player

Profile

49. ERROR STATES

Use shadcn Alert components.

Example:

"Something went wrong while loading this course."

[ Try again ]

50. ACCESS CONTROL UI

The frontend must visually respect roles.

Parent cannot see teacher dashboard.

Teacher cannot see admin dashboard.

Student is not a login role.

Admin can access administration.

However, remember:

Frontend route protection is NOT the real security mechanism.

The future NestJS backend must enforce authorization independently.

51. MOCK DATA

Create realistic mock data for:

Parents

Children

Teachers

Courses

Lessons

Orders

Payments

Progress

Reviews

Use Tunisian context where appropriate:

Prices in:

DT / TND

Examples:

15 DT

20 DT

25 DT

35 DT

Teacher profiles can use fictional Tunisian university names or clearly fictional data.

Do not use real people's personal information.

52. IMPORTANT PARENT/CHILD UX RULE

This is one of the most important parts of the entire design.

Never make the child look like a normal registered user.

The UI should communicate:

Parent account

↓

Children

↓

Courses

For example:

"My children"

Youssef — 9th Grade

Sara — 7th Grade

When a parent purchases a course:

"Available to all children in your account."

This should appear consistently in:

Checkout

Parent dashboard

My Courses

Child profile

Course access

Order details

53. ACCESS CONTROL UX

Course states:

Not purchased

Show:

[ Buy course — 25 DT ]

Purchased

Show:

[ Start learning ]

Course unavailable

Show:

"Your access to this course is currently unavailable."

Teacher course pending

Do not show it publicly.

Rejected course

Only teacher/admin can see it.

54. MOBILE COURSE PLAYER

On mobile:

Top:

MAAK

Course title

Progress

Then:

Video

Lesson title

Resources

Previous / Next

Curriculum should open in a Sheet/Drawer.

Use shadcn Sheet.

55. MOBILE DASHBOARD

Use:

Top header.

Content.

Bottom navigation.

For Parent:

Home

Courses

Children

Orders

Profile

For Teacher:

Dashboard

Courses

Create

Sales

Profile

56. ACCESSIBILITY

Follow accessible UX practices:

Proper labels

Keyboard navigation

Visible focus states

Sufficient color contrast

ARIA where appropriate

Don't rely only on color

Accessible dialogs

Accessible dropdowns

Accessible form errors

Use shadcn components because they provide a strong foundation for accessible primitives.

57. ANIMATIONS

Use subtle animations only.

Examples:

Card hover

Button feedback

Page transitions

Modal appearance

Progress animation

Skeleton loading

Avoid:

Excessive parallax

Huge entrance animations

Distracting background animations

MAAK is an educational platform, not a gaming website.

58. COMPONENT ARCHITECTURE

Organize reusable components approximately as:

components/

ui/

course/

auth/

parent/

teacher/

admin/

learning/

navigation/

dashboard/

Use feature-based components rather than putting everything into one huge components folder.

59. NEXT.JS STRUCTURE

Use the Next.js App Router.

Suggested structure:

app/

page.tsx

courses/

teachers/

login/

register/

parent/

teacher/

admin/

learn/

Use layouts for:

Public layout

Parent dashboard layout

Teacher dashboard layout

Admin layout

Learning layout

60. BACKEND-READY DESIGN

Although the backend is not being built now, design the frontend so that mock data can later be replaced by NestJS REST API calls.

Do not tightly couple components to mock data.

Create a clean service/API abstraction.

For example:

api/

auth.ts

courses.ts

parents.ts

teachers.ts

orders.ts

payments.ts

learning.ts

admin.ts

Later these will communicate with the NestJS backend.

61. DO NOT IMPLEMENT PAYMENT PROVIDER NOW

Build the complete payment UX using mock/sandbox state.

Do not assume a specific Tunisian payment provider.

The future NestJS backend will contain an abstraction such as:

PaymentProvider

with a provider-specific implementation added later.

The frontend only needs to understand:

pending

success

failed

cancelled

refunded

62. IMPORTANT PRODUCT BOUNDARIES

Do NOT add:

Chat

Private sessions

Zoom-like meetings

Subscription billing

Social feed

Forums

AI chatbot

Complex gamification

Native mobile app

These are future developments.

The MVP should be focused and polished.

63. PRIMARY USER FLOWS TO IMPLEMENT

Flow 1 — Parent

Home

→ Courses

→ Course details

→ Login/Register

→ Create child

→ Checkout

→ Payment

→ Success

→ Parent dashboard

→ Child

→ Course

→ Learning

Flow 2 — Teacher

Register as Teacher

→ Teacher onboarding

→ Dashboard

→ Create course

→ Add curriculum

→ Add lessons

→ Set price

→ Preview

→ Submit

→ Pending

→ Approved

→ Published

Flow 3 — Child learning

Parent dashboard

→ Select child

→ My courses

→ Course

→ Lesson

→ Complete lesson

→ Progress updated

Flow 4 — Admin

Admin login

→ Dashboard

→ Pending courses

→ Review

→ Approve/Reject

→ Course becomes visible/unavailable

64. FINAL UX PRINCIPLE

MAAK should not feel like four separate applications.

It should feel like one platform with four tailored experiences:

PUBLIC MAAK

↓

Parent experience

↓

Child learning experience

↓

Teacher experience

↓

Administrator experience

Maintain the same:

Typography

Color system

Buttons

Cards

Icons

Spacing

Navigation principles

across all roles.

Only the information architecture changes.

65. FINAL INSTRUCTION TO LOVABLE

Build the frontend as a polished, coherent, responsive MAAK MVP.

Prioritize:

Excellent UX

Clear navigation

Strong course discovery

Excellent course-learning experience

Simple parent/child management

Professional teacher course creation

Clean administration

Reusable shadcn components

Responsive design

Backend-ready architecture

Use Udemy for marketplace patterns, Teachable for teacher/course creation, Thinkific for learning/course-player UX, Moodle for educational structure and administration concepts, and shadcn/ui for the component system.

Do not copy any platform's branding or exact design.

Create a unique MAAK visual identity.

The final interface should look like a real startup/product that could be deployed, not a generic AI-generated dashboard.

Use realistic Tunisian pricing in TND/DT.

Use realistic educational data.

Keep the MVP focused on public recorded courses and purchasing.

Private tutoring, messaging, subscriptions and other advanced features must remain future developments.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/442b9620-bafa-4b57-98ff-cb59adc9801f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
