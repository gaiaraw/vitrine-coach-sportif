const { createApp } = Vue

createApp({
    data() {
        return {
            isScrolled: false,
            isNavVisible: true,
            lastScrollPosition: 0,
            mobileMenuOpen: false,
            heroTitle: "Transformez Votre Corps, Transformez Votre Vie",
            heroSubtitle: "Coach sportif certifié spécialisé en transformation physique et bien-être",
            selectedService: null,
            services: [
                {
                    id: 1,
                    name: "Coaching Personnalisé",
                    description: "Programme sur mesure adapté à vos objectifs",
                    icon: "fas fa-user-cog",
                    price: 60,
                    period: "par séance",
                    fullDescription: "Un accompagnement individuel pour atteindre vos objectifs. Chaque séance est minutieusement planifiée en fonction de vos besoins, votre niveau et vos contraintes.",
                    features: [
                        "Évaluation complète de votre condition physique",
                        "Programme personnalisé",
                        "Suivi nutritionnel",
                        "Accès à l'application de suivi",
                        "Support WhatsApp 7j/7"
                    ]
                },
                {
                    id: 2,
                    name: "Small Group Training",
                    description: "Sessions en petit groupe de 4 personnes maximum",
                    icon: "fas fa-users",
                    price: 30,
                    period: "par séance",
                    fullDescription: "Profitez de l'énergie du groupe tout en bénéficiant d'une attention personnalisée. Les séances sont limitées à 4 personnes pour garantir un suivi optimal.",
                    features: [
                        "Séances dynamiques et variées",
                        "Émulation de groupe",
                        "Prix avantageux",
                        "Horaires flexibles",
                        "Première séance d'essai gratuite"
                    ]
                },
                {
                    id: 3,
                    name: "Programme En Ligne",
                    description: "Suivi à distance avec programme personnalisé",
                    icon: "fas fa-laptop",
                    price: 99,
                    period: "par mois",
                    fullDescription: "Un accompagnement complet à distance pour progresser à votre rythme. Idéal pour les personnes autonomes ou avec un emploi du temps chargé.",
                    features: [
                        "Programme d'entraînement personnalisé",
                        "Plan nutritionnel détaillé",
                        "Vidéos explicatives des exercices",
                        "Suivi hebdomadaire par visioconférence",
                        "Communauté privée de support"
                    ]
                }
            ],
            stats: {
                experience: 8,
                clients: 500,
                transformations: 200
            },
            aboutText: "Passionné de fitness et de bien-être depuis plus de 8 ans, je mets mon expertise au service de votre transformation. Diplômé d'État et certifié dans plusieurs disciplines, j'ai développé une approche holistique qui combine entraînement personnalisé, nutrition adaptée et accompagnement mental.",
            coachImage: "images/coach-max.jpg",
            certifications: [
                "DEUST Métiers de la Forme",
                "Certification CrossFit Level 2",
                "Certification en Nutrition Sportive",
                "Spécialisation en Réathlétisation",
                "Coach TRX Certifié"
            ],
            transformations: [
                {
                    id: 1,
                    name: "Thomas",
                    duration: "6 mois",
                    type: "Perte de poids",
                    beforeImage: "images/before1.jpg",
                    afterImage: "images/after1.jpg"
                },
                {
                    id: 2,
                    name: "Marie",
                    duration: "4 mois",
                    type: "Tonification",
                    beforeImage: "images/before2.jpg",
                    afterImage: "images/after2.jpg"
                },
                {
                    id: 3,
                    name: "Laurent",
                    duration: "8 mois",
                    type: "Prise de masse",
                    beforeImage: "images/before3.jpg",
                    afterImage: "images/after3.jpg"
                }
            ],
            currentTestimonialIndex: 0,
            testimonials: [
                {
                    id: 1,
                    name: "Sophie L.",
                    image: "images/testimonial1.jpg",
                    text: "Grâce à MaxFit, j'ai perdu 15kg en 6 mois. Le suivi personnalisé et les encouragements constants ont fait toute la différence.",
                    achievement: "-15kg en 6 mois"
                },
                {
                    id: 2,
                    name: "Marc D.",
                    image: "images/testimonial2.jpg",
                    text: "Un coach exceptionnel qui sait vous pousser à donner le meilleur de vous-même. Les résultats sont au rendez-vous !",
                    achievement: "+8kg de masse musculaire"
                },
                {
                    id: 3,
                    name: "Julie M.",
                    image: "images/testimonial3.jpg",
                    text: "Le programme en ligne est parfait pour mon emploi du temps chargé. Les vidéos sont claires et le suivi est très professionnel.",
                    achievement: "Objectif marathon atteint"
                }
            ],
            formData: {
                name: "",
                email: "",
                phone: "",
                goal: "",
                message: ""
            },
            goals: [
                "Perte de poids",
                "Prise de masse musculaire",
                "Tonification",
                "Préparation physique",
                "Remise en forme",
                "Performance sportive"
            ],
            contactInfo: {
                address: "123 Rue du Sport, 75001 Paris",
                phone: "01 23 45 67 89",
                email: "contact@maxfit.fr"
            },
            social: {
                instagram: "https://instagram.com/maxfit",
                facebook: "https://facebook.com/maxfit",
                youtube: "https://youtube.com/maxfit"
            },
            touchStartX: 0,
            touchEndX: 0
        }
    },
    computed: {
        currentYear() {
            return new Date().getFullYear()
        },
        sliderStyle() {
            return {
                transform: `translateX(-${this.currentTestimonialIndex * 100}%)`
            }
        }
    },
    methods: {
        handleScroll() {
            const currentScrollPosition = window.scrollY
            this.isScrolled = currentScrollPosition > 50
            
            if (currentScrollPosition < 0) {
                return
            }
            
            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                return
            }
            
            this.isNavVisible = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen
        },
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId)
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
            
            this.mobileMenuOpen = false
            if (this.selectedService) {
                this.closeModal()
            }
        },
        selectService(service) {
            this.selectedService = service
        },
        closeModal() {
            this.selectedService = null
        },
        prevTestimonial() {
            if (this.currentTestimonialIndex > 0) {
                this.currentTestimonialIndex--
            }
        },
        nextTestimonial() {
            if (this.currentTestimonialIndex < this.testimonials.length - 1) {
                this.currentTestimonialIndex++
            }
        },
        touchStart(event) {
            this.touchStartX = event.touches[0].clientX
        },
        touchMove(event) {
            this.touchEndX = event.touches[0].clientX
        },
        touchEnd() {
            const difference = this.touchStartX - this.touchEndX
            if (Math.abs(difference) > 50) {
                if (difference > 0) {
                    this.nextTestimonial()
                } else {
                    this.prevTestimonial()
                }
            }
        },
        submitForm() {
            // Simulation d'envoi du formulaire
            console.log('Formulaire soumis:', this.formData)
            alert('Merci pour votre message ! Nous vous contacterons rapidement.')
            this.formData = {
                name: "",
                email: "",
                phone: "",
                goal: "",
                message: ""
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}).mount('#app')
