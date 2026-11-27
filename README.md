# My Khata - Student Edition

Dosto ka udhaar, chhote kharche aur hisaab, sab ek jagah. Free hai, phone par app ki tarah chalta hai.

## Tabs (ab asaan naam)
- **Friends** - kisne tumse paise lene hain / tumne kisko dene hain
- **Items** - cheezein ya stock (zaroorat ho to)
- **Summary** - kul hisaab ek nazar mein
- **Money** - pocket money aur kharche
- **Community** - baaqi users se baat-cheet

## Setup (sirf 3 kaam, 10 minute)
1. **Supabase** (supabase.com) par free account banao > New project.
2. Project ke **SQL Editor** mein jao > `supabase_setup.sql` ka poora text paste karo > **Run**. Bas, database tayyar.
3. **Project Settings > API** se URL aur publishable key copy karke `config.js` mein paste karo.

Phir folder ko Netlify / Vercel / GitHub Pages par upload karo. Phone mein "Add to Home screen" dabao.

## Khud ko admin banana
App mein ek baar sign up karo, phir SQL Editor mein ye chalao (apni email likho):

    update profiles set is_admin = true where email = 'tumhari@email.com';

Uske baad `admin.html` khol kar login karo.

## Files
- `index.html` - main app | `shop.html` - online store | `owner.html` - store owner panel
- `community.html` - community | `admin.html` - admin panel
- `supabase_setup.sql` - poora database (ek baar run)
