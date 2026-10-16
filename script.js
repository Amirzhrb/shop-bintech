
        // Initialize Lucide Icons
        lucide.createIcons();

        // Format number to Persian locale currency
        function formatPersianPrice(num) {
            return num.toLocaleString('fa-IR');
        }

        // Flash Deals Data
        const flashProducts = [
            {
                id: 1,
                title: 'آیفون ۱۵ پرو مکس ۲۵۶ گیگابایت',
                category: 'گوشی هوشمند',
                discount: '۳۰٪-',
                oldPrice: 75000000,
                price: 69500000,
                reviews: '۲۴۸',
                img: '461ccc868f9796deff60f9402c58c2045b53f881_1786538647.webp'
            },
            {
                id: 2,
                title: 'لپ‌تاپ دل مدل XPS 13 Plus',
                category: 'لپ‌تاپ',
                discount: '۱۵٪-',
                oldPrice: 72000000,
                price: 61500000,
                reviews: '۱۸۶',
                img: '461ccc868f9796deff60f9402c58c2045b53f881_1786538647.webp'
            },
            {
                id: 3,
                title: 'هدفون بی‌سیم سونی WH-1000XM5',
                category: 'صوتی',
                discount: '۲۵٪-',
                oldPrice: 21000000,
                price: 17500000,
                reviews: '۳۲۰',
                img: '461ccc868f9796deff60f9402c58c2045b53f881_1786538647.webp'
            },
            {
                id: 4,
                title: 'ساعت هوشمند سامسونگ گلکسی واچ ۶',
                category: 'ساعت هوشمند',
                discount: '۳۰٪-',
                oldPrice: 14200000,
                price: 11900000,
                reviews: '۴۱۲',
                img: 'c6a819d7c9dcdc6f0176404ce0858bc2b9e72c5a_1786296596.webp'
            },
            {
                id: 5,
                title: 'اسپیکر بلوتوثی بوز SoundLink Revolve+',
                category: 'صوتی',
                discount: '۲۰٪-',
                oldPrice: 16500000,
                price: 13200000,
                reviews: '۱۵۳',
                img: 'c6a819d7c9dcdc6f0176404ce0858bc2b9e72c5a_1786296596.webp'
            },
            {
                id: 6,
                title: 'دوربین بدون آینه کانن EOS R50',
                category: 'دوربین',
                discount: '۱۵٪-',
                oldPrice: 42000000,
                price: 37800000,
                reviews: '۲۱۰',
                img: 'c6a819d7c9dcdc6f0176404ce0858bc2b9e72c5a_1786296596.webp'
            }
        ];

        // New Arrivals Data
        const newArrivalProducts = [
            {
                id: 101,
                title: 'آیپد ایر (نسل پنجم) M1',
                price: 34900000,
                reviews: '۱۴۶',
                img: 'c6a819d7c9dcdc6f0176404ce0858bc2b9e72c5a_1786296596.webp'
            },
            {
                id: 102,
                title: 'هدفون سونی مدل WH-CH720N',
                price: 8900000,
                reviews: '۲۳۰',
                img: 'c6a819d7c9dcdc6f0176404ce0858bc2b9e72c5a_1786296596.webp'
            },
            {
                id: 103,
                title: 'کوادکوپتر دی‌جی‌آی مدل Mini 3',
                price: 28500000,
                reviews: '۴۱۲',
                img: 'fde93e4e4db279e53cda5e4b75dd1a3dce8504ac_1779535107.webp'
            },
            {
                id: 104,
                title: 'ماوس بی‌سیم لاجیتک MX Master 3S',
                price: 6200000,
                reviews: '۲۷۰',
                img: 'fde93e4e4db279e53cda5e4b75dd1a3dce8504ac_1779535107.webp'
            }
        ];

        // Render Flash Deals
        function renderFlashDeals(filter = 'همه') {
            const container = document.getElementById('flashDealsGrid');
            const filtered = filter === 'همه'
                ? flashProducts
                : flashProducts.filter(p => p.category.includes(filter));

            const listToRender = filtered.length ? filtered : flashProducts;

            container.innerHTML = listToRender.map(item => `
                <div class="rounded-2xl bg-white border border-slate-200/70 p-3.5 flex flex-col justify-between hover:shadow-lg hover:border-brand-300 transition group">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="px-2 py-0.5 rounded-md bg-rose-500 text-white text-[10px] font-bold">${item.discount}</span>
                            <button onclick="addToWishlist('${item.title}')" class="text-slate-300 hover:text-rose-500 transition">
                                <i data-lucide="heart" class="w-4 h-4"></i>
                            </button>
                        </div>
                        <div class="h-32 flex items-center justify-center p-2">
                            <img src="${item.img}" alt="${item.title}" class="max-h-full max-w-full object-contain rounded-xl group-hover:scale-105 transition duration-300">
                        </div>
                        <h3 class="text-xs font-bold text-slate-800 mt-2 line-clamp-2 min-h-[32px]">${item.title}</h3>
                    </div>
                    <div class="pt-3 mt-2 border-t border-slate-100">
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-[10px] text-slate-400 line-through block">${formatPersianPrice(item.oldPrice)}</span>
                                <span class="text-xs font-black text-slate-900">${formatPersianPrice(item.price)} <span class="text-[10px] font-normal">تومان</span></span>
                            </div>
                            <button onclick="addToCart('${item.title}', ${item.price}, '${item.img}')" class="w-8 h-8 rounded-xl bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center transition shadow-sm">
                                <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                            </button>
                        </div>
                        <div class="flex items-center gap-1 mt-2 text-[10px] text-amber-400">
                            <span>★★★★★</span>
                            <span class="text-slate-400">(${item.reviews})</span>
                        </div>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // Render New Arrivals
        function renderNewArrivals() {
            const container = document.getElementById('newArrivalsGrid');
            container.innerHTML = newArrivalProducts.map(item => `
                <div class="rounded-2xl bg-white border border-slate-200/70 p-3.5 flex flex-col justify-between hover:shadow-lg hover:border-brand-300 transition group">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="px-2 py-0.5 rounded-md bg-brand-600 text-white text-[10px] font-bold">جدید</span>
                            <button onclick="addToWishlist('${item.title}')" class="text-slate-300 hover:text-rose-500 transition">
                                <i data-lucide="heart" class="w-4 h-4"></i>
                            </button>
                        </div>
                        <div class="h-32 flex items-center justify-center p-2">
                            <img src="${item.img}" alt="${item.title}" class="max-h-full max-w-full object-contain rounded-xl group-hover:scale-105 transition duration-300">
                        </div>
                        <h3 class="text-xs font-bold text-slate-800 mt-2 line-clamp-2 min-h-[32px]">${item.title}</h3>
                    </div>
                    <div class="pt-3 mt-2 border-t border-slate-100 flex items-end justify-between">
                        <div>
                            <span class="text-xs font-black text-slate-900 block">${formatPersianPrice(item.price)} ت</span>
                            <div class="flex items-center gap-1 mt-1 text-[10px] text-amber-400">
                                <span>★★★★★</span>
                                <span class="text-slate-400">(${item.reviews})</span>
                            </div>
                        </div>
                        <button onclick="addToCart('${item.title}', ${item.price}, '${item.img}')" class="w-8 h-8 rounded-xl bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center transition shadow-sm">
                            <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // Filter Category Action
        function filterCategory(categoryName) {
            renderFlashDeals(categoryName);
            showToast(`فیلتر دسته‌بندی: ${categoryName}`);
            document.getElementById('flash-deals').scrollIntoView({ behavior: 'smooth' });
        }

        // Hero Slider Logic
        const heroSlides = [
            {
                badge: 'رونمایی جدید',
                title: 'تکنولوژی آینده،<br><span class="text-transparent bg-clip-text bg-gradient-to-l from-white via-indigo-200 to-brand-400">همین امروز.</span>',
                subtitle: 'جدیدترین دستگاه‌های هوشمند، گجت‌های پوشیدنی و نوآوری‌های دیجیتال روز دنیا را با ضمانت اصالت تجربه کنید.',
                                img: 'fde93e4e4db279e53cda5e4b75dd1a3dce8504ac_1779535107.webp'
,
                num: '۰۱',
                progress: '33%'
            },
            {
                badge: 'نسل جدید مک',
                title: 'قدرت بی‌مرز،<br><span class="text-transparent bg-clip-text bg-gradient-to-l from-white via-purple-200 to-indigo-400">مک‌بوک پرو M3.</span>',
                subtitle: 'طراحی فوق باریک همراه با سریع‌ترین پردازشگر گرافیکی تاریخ اپل برای حرفه‌ای‌ترین کاربران.',
                                img: 'fde93e4e4db279e53cda5e4b75dd1a3dce8504ac_1779535107.webp'
,
                num: '۰۲',
                progress: '66%'
            },
            {
                badge: 'صدای سه‌بعدی',
                title: 'غرق در موسیقی،<br><span class="text-transparent bg-clip-text bg-gradient-to-l from-white via-indigo-200 to-brand-400">بدون نویز محیط.</span>',
                subtitle: 'هدفون‌های پرچمدار سونی و اپل با قابلیت حذف نویز هوشمند و باتری ۴۰ ساعته.',
                                img: 'fde93e4e4db279e53cda5e4b75dd1a3dce8504ac_1779535107.webp'
,
                num: '۰۳',
                progress: '100%'
            }
        ];
        let currentHeroIndex = 0;

        function changeHeroSlide(dir) {
            currentHeroIndex = (currentHeroIndex + dir + heroSlides.length) % heroSlides.length;
            const slide = heroSlides[currentHeroIndex];
            const content = document.getElementById('heroSlideContent');
            content.style.opacity = '0.2';
            setTimeout(() => {
                document.getElementById('heroBadge').textContent = slide.badge;
                document.getElementById('heroTitle').innerHTML = slide.title;
                document.getElementById('heroSubtitle').textContent = slide.subtitle;
                document.getElementById('heroMainImg').src = slide.img;
                document.getElementById('slideNumCurrent').textContent = slide.num;
                document.getElementById('slideProgressBar').style.width = slide.progress;
                content.style.opacity = '1';
            }, 180);
        }

        // Live Countdown Timer
        let totalSeconds = 7 * 3600 + 45 * 60 + 32;
        setInterval(() => {
            if (totalSeconds > 0) totalSeconds--;
            const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            const secs = String(totalSeconds % 60).padStart(2, '0');

            // Convert to Persian digits
            const toPersianDigits = s => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
            document.getElementById('cdHours').textContent = toPersianDigits(hrs);
            document.getElementById('cdMinutes').textContent = toPersianDigits(mins);
            document.getElementById('cdSeconds').textContent = toPersianDigits(secs);
        }, 1000);

        // Shopping Cart State
        let cart = [
            { title: 'آیفون ۱۵ پرو مکس ۲۵۶ گیگابایت', price: 69500000, qty: 1, img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=200&q=80' },
            { title: 'هدفون بی‌سیم سونی WH-1000XM5', price: 17500000, qty: 1, img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=200&q=80' }
        ];

        function updateCartUI() {
            const badge = document.getElementById('cartBadge');
            const container = document.getElementById('cartItemsContainer');
            const totalEl = document.getElementById('cartTotalPrice');

            const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
            badge.textContent = totalQty.toLocaleString('fa-IR');

            if (cart.length === 0) {
                container.innerHTML = `<div class="text-center py-12 text-slate-400 text-sm">سبد خرید شما خالی است</div>`;
                totalEl.textContent = '۰ تومان';
                return;
            }

            let totalPrice = 0;
            container.innerHTML = cart.map((item, idx) => {
                totalPrice += item.price * item.qty;
                return `
                    <div class="flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <img src="${item.img}" class="w-14 h-14 rounded-xl object-cover shrink-0">
                        <div class="flex-1">
                            <h4 class="text-xs font-bold text-slate-800">${item.title}</h4>
                            <p class="text-xs text-brand-600 font-extrabold mt-1">${formatPersianPrice(item.price)} تومان</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-xs font-bold px-2 py-1 bg-white rounded-lg border">${item.qty.toLocaleString('fa-IR')}</span>
                            <button onclick="removeFromCart(${idx})" class="text-slate-400 hover:text-rose-500 p-1">
                                <i data-lucide="trash-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                `;
            }).join('');

            totalEl.textContent = `${formatPersianPrice(totalPrice)} تومان`;
            lucide.createIcons();
        }

        function addToCart(title, price, img) {
            const existing = cart.find(i => i.title === title);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ title, price, qty: 1, img });
            }
            updateCartUI();
            showToast(`«${title}» به سبد خرید اضافه شد`);
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        // Cart Drawer Open/Close
        const cartDrawer = document.getElementById('cartDrawer');
        const cartBackdrop = document.getElementById('cartDrawerBackdrop');

        document.getElementById('cartToggleBtn').addEventListener('click', () => {
            cartBackdrop.classList.remove('hidden');
            setTimeout(() => cartBackdrop.classList.remove('opacity-0'), 10);
            cartDrawer.classList.remove('-translate-x-full');
        });

        function closeCart() {
            cartDrawer.classList.add('-translate-x-full');
            cartBackdrop.classList.add('opacity-0');
            setTimeout(() => cartBackdrop.classList.add('hidden'), 300);
        }

        function checkoutOrder() {
            if (cart.length === 0) {
                showToast('سبد خرید شما خالی است!');
                return;
            }
            closeCart();
            showToast('در حال انتقال به درگاه پرداخت امن شاپرک...');
        }

        // Wishlist counter
        let wishlistCount = 0;
        function addToWishlist(title) {
            wishlistCount++;
            const badge = document.getElementById('wishlistBadge');
            badge.classList.remove('hidden');
            badge.textContent = wishlistCount.toLocaleString('fa-IR');
            showToast(`«${title}» به لیست علاقه‌مندی‌ها اضافه شد`);
        }
        function toggleWishlistHeader() {
            showToast(`شما ${wishlistCount.toLocaleString('fa-IR')} محصول در لیست علاقه‌مندی دارید`);
        }

        // Search handler
        function handleSearch(isMobile = false) {
            const val = document.getElementById(isMobile ? 'mobileSearchInput' : 'searchInput').value.trim();
            if (!val) {
                showToast('لطفاً عبارت مورد نظر را وارد کنید');
                return;
            }
            showToast(`در حال جستجو برای: «${val}»`);
        }

        // Testimonials switcher
        const testimonials = [
            {
                text: '«ایگزمپل بهترین مجموعه از گجت‌های روز رو داره. ارسال فوق‌العاده سریع بود، قیمت‌ها عالی و پشتیبانی واقعاً محترمانه و حرفه‌ای برخورد کردن!»',
                name: 'سارا محمدی',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
            },
            {
                text: '«مک‌بوک ایر M2 رو با قیمت عالی از جشنواره خریدم. بسته‌بندی کاملاً ایمن بود و گارانتی شرکتی معتبر داشت. حتماً دوباره خرید می‌کنم.»',
                name: 'امیرحسین رضایی',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
            },
            {
                text: '«تنوع محصولات صوتی و هدفون‌ها بی‌نظیره. خیلی راحت تونستم مدل مناسب کارم رو پیدا کنم و ظرف ۲۴ ساعت تحویل گرفتم.»',
                name: 'نگار کریمی',
                avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80'
            }
        ];

        function setTestimonial(idx) {
            document.getElementById('testimonialText').textContent = testimonials[idx].text;
            document.getElementById('testimonialName').textContent = testimonials[idx].name;
            document.getElementById('testimonialAvatar').src = testimonials[idx].avatar;
            [0, 1, 2].forEach(i => {
                const dot = document.getElementById('tDot' + i);
                dot.className = i === idx
                    ? 'w-2.5 h-2.5 rounded-full bg-brand-600 transition'
                    : 'w-2 h-2 rounded-full bg-slate-300 transition';
            });
        }

        // Newsletter Submit
        function handleNewsletter(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            document.getElementById('newsletterEmail').value = '';
            showToast(`ایمیل ${email} با موفقیت در باشگاه ثبت شد!`);
        }

        // Video Modal
        function openVideoModal() {
            const modal = document.getElementById('videoModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
        function closeVideoModal() {
            const modal = document.getElementById('videoModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Toast Helper
        let toastTimeout;
        function showToast(msg) {
            const box = document.getElementById('toastBox');
            document.getElementById('toastMessage').textContent = msg;
            box.classList.remove('translate-y-20', 'opacity-0');
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                box.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        // Initial Render
        renderFlashDeals();
        renderNewArrivals();
        updateCartUI();