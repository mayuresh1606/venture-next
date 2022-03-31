import Navbar from "../components/Navbar"
import { useEffect } from "react"
let pilgrimsList = [
    {
        days:"1 Day to 3 days",
        heading:"MAHARASHTRA",
        pointOne:"Transfer Point: Mumbai",
        pointOnePara:"Mahalaxmi, Babulnath, Walkeshwar,Siddhivinayak, Mumbadevi, Iskcon, Ganeshpuri / Vajreshwari (Vasai or Virar), Ambreshwar (Ambernath), Ganesh Mandir (Titwala).",

        pointTwo:"Transfer Point: Pune",
        pointTwoPara:"SwamiNarayan, Balaji, Mahalaxmi, Dagdusheth Ganpati, Bhuleshwar, Nilkantheshwar, Omkareshwar, Chaturshringi, Pataleshwar Cave, Parvati, Kasba Ganpati, Jejuri Khandoba, Alandi.",

        pointThree:"Transfer Point: Nashik",
        pointThreePara:"Navshya Ganpati, Kalaram, Kapleshwar, Panchavati, Ramkund, Sita Gufa, Ganga Godavari, Muktidham, Someshwar, Veda Mandir, Sundarnarayan, Gondeshwar, Modakeshwar, Naroshankar, Saptashrungi, Trimbakeshwar, Anjaneri.",

        pointFour:"Shirdi",
        pointFourPara:"Sai Baba Temple and Shani  Shinganapur",

    },
    {
        days:"2 Days to 5 days",
        heading:"MAHARASHTRA",
        pointOne:"Konkan",
        pointOnePara:"Ganpatipule, Ganeshgule, Hedvi Ganpati Mandir, Marleshwar (Ratnagiri) Harihareshwar, Velneshwar Temple (Guhagar), Anjarle Ganpati Temple (Chiplun).",

        pointTwo:"Satara",
        pointTwoPara:"Wai, Yamai Devi Temple Aundh.",

        pointThree:"Kolhapur",
        pointThreePara:"Mahalakshmi temple, Jyotiba, Shri Kopeshwar Temple.",

        pointFour:"Sangli",
        pointFourPara:"Ganapati Temple, Narsobawadi",
        
        pointFour:"Solapur",
        pointFourPara:"Tulja Bhawani Temple, Pandharpur and Akkalkot (Swami Samarth Ashram).",

        pointHeadOne:"Ashtavinayaka:",
        pointHeadParaOne:"*Moreshwar – (Morgaon, Pune), *Middhivinayak – (Siddhatek, Ahmednagar), *Ballaleshwar – (Pali, Raigad), *Varadavinayak – (Mahad, Khopoli, Raigad), *Chintamani – (Theur, Pune), *Girijatmaj – (Lenyadri, Pune) *Vighnahar – (Ozar, Pune) *Mahaganapati – (Ranjangaon, Pune) + Bhimashankar (Pune) + Jejuri (Pune).",

        pointHeadTwo:"AKARA (11) MARUTI:",
        pointHeadParaTwo:"*Chunyacha Maruti – (Shahapur Karad), *Maharudra Hanuman – (Masur Karad), *Umbraj Maruti or Mathatil Maruti – (Umbraj Masur Karad), *Bahe-Borgaon cha Maruti – (Bahe-Borgaon Sangli), *Daas Maruti + *Pratap Maruti – (Chafal Satara), *Khadicha Maruti or Baal Maruti – (Shinganwadi Satara), *Maj Gavcha Maruti – (Majgaon Satara), *Manapadale cha Maruti – (Manapadale Kolhapur), *Pargav cha Maruti – (Pargaon Panhala), *Veer Maruti – (Battis, Shirala).",

        pointHeadThree:"Five Jyotirlinga in Maharashtra:",
        pointHeadParaThree:"*Trimbakeshwar – (Nasik), *Grishneshwar – (Aurangabad), *Nagnath (Aundha), *Bhimashankar – (Pune), *Parli Vaijnath – (Pali).",

        pointHeadFour:"Four Shakti Peeth in Maharashtra:",
        pointHeadParaFour:"*Amba Bai / Mahalaxmi – (Kolhapur)  *Jagadamba – (Saptashrungi Nashik), *Tulja Bhavani – (Tuljapur), *Mahamaya and Renuka or Jagdamba Devi – (Mahur, Nanded).",
    },
    {
        days:"5 Days to 10 days",
        pointHeadUnderOne:"Char Dham",
        pointHeadParaOne:"*Puri, *Rameswaram, *Dwarka, *Badrinath. (+ *Pushkar)",

        pointHeadUnderTwo:"Chota Char Dham (Uttarakhand)",
        pointHeadParaTwo:"*Yamunotri, *Gangotri, *Kedarnath, *Badrinath.",

        pointHeadUnderThree:"Char Dham (Nepal)",
        pointHeadParaThree:"Pashupatinath, Muktinath, Ruru Kshetra, Barahachhetra",

        pointHeadUnderFour:"Adi Shankaracharya Mathas.",
        pointHeadParaFour:"*Sharada Peetham, (Karnataka) – *Yajur Veda, Govardhana Matha, (Odisha) – *Rig Veda, Dwaraka Pitha, (Gujarat) – *Sama Veda, Jyotir Math, (Uttarakhand) – Atharva Veda",
    }
]

let shaktiVar = "1. Mahamaya Shakti Peeth, Amarnath, Jammu and Kashmir 2. Shakti Dakshayani, Manasarovar 3. Uma at Mithila, border of Nepal and India 4. Gandaki Chandi Shakti Peeth, Muktinath, Kathmandu (Nepal) 5. Mahashira, Guhyeshwari near Pashupatinath Temple 6. Jwala or Shakti Siddhida, Kangra, Himachal Pradesh (Nepal) 7. Tripurmalini, Jalandhar, Punjab 8. Savitri/Bhadra Kali, Kurukshetra, Haryana 9. Gayatri Manibandh, Pushkar, Rajasthan 10. Ambika, Bharatpur, Rajasthan 11. Nabi Gaya, Biraj, Jaipur Rajasthan 12. Varahi, Panch Sagar, Uttar Pradesh 13. Uma at Vrindavan/Bhooteswar Temple of Uttar Pradesh 14. Vishalakshi, Varanasi, Uttar Pradesh 15. Lalita of Prayag Uttar Pradesh 16. Khamakya, Guwahati, Assam 17. Tripura Sundari, Udaipur in Tripura 18. Fullara Devi Shaktipeeth, in Attahasa, West Bengal 19. Bahula Shakti Peetha, Bardhaman, West Bengal 20. Devgarbha/Kankleshwari, Birbhum, West Bengal 21. Devgarbha/Kankleshwari, Birbhum, West Bengal 22. Kalika, Kalighat, West Bengal 23. Kumara Shakti at Anandamayee Temple of West Bengal 24. Vimla, Murshidabad, West Bengal 25. Shakti Bhraamari, Ratnavali, West Bengal 26. Nandini or Nandikeshwari, Birbhum, West Bengal 27. Kapalini of Vibash, Medinipur, West Bengal 28. Mahishmardini Shaktipeeth, Bakreshwar, Siuri town West Bengal 29. Jai Durga, Deogarh, Jharkhand 30. Danteshwari, Chattisgarh 31. Avanti, Bhairav Parvat Shakti Peeth, Ujjain, Madhya Pradesh 32. Kali in Kalmadhav, Amarkantak, Madhya Pradesh 33. Maihar/Shivani, Satna, Madhya Pradesh 34. The Narmada Shondesh, Amarkantak, Madhya Pradesh 35. Mangal Chandika at Ujjain (Madhya Pradesh) 36. Chandrabhaga, Junagarh, Gujarat 37. Amba at Ambaji, Gujarat 38. Maa Bhramari, Janasthan Panchavati Nasik Maharastra 39. Chamudeshwari/Jaya Durga, Chamundi Hills, Mysore 40. Sravani, Kanyakumari, Tamil Nadu 41. Sarvashail/Rakini Godavari river banks Kotilingeswar Andhra Pradesh 42. Devi Narayani, Suchindram, Tamil Nadu 43. Indraksh, Nainativu, Manipallavam (Sri Lanka) 44. Shri Aparna, Bhabanipur Shaktipith, (Bangladesh) 45. Jayanti Shaktipeeth Temple, Bourbhag Village, (Bangladesh) 46. Bhawani at Chandranath Hills, (Bangladesh) 47. Sundari at Sri Sailam (Bangladesh) 48. Maha Lakshmi at Sri Shail (Bangladesh) 49. Suganda of Shikarpur (Bangladesh) 50. Yogeshwari, Khulna district (Bangladesh) 51. Mahish Mardini at Shivaharkaray near Karachi (Pakistan) 52. Kottari, Hinglaj Mata mandir, Karachi (Pakistan)"
let shaktiPeeth = []

let krishnaYatra = [
    {
        name:"Birla Mandir, Kurukshetra",
        location:"Haryana"
    },
    {
        name:"ISKCON Temple",
        location:"New Delhi"
    },
    {
        name:"Sri Sri Radha Madhan Mohan Mandir, Vrindavan",
        location:"Uttar Pradesh"
    },
    {
        name:"Banke Bihari Temple, Vrindavan",
        location:"Uttar Pradesh"
    },
    {
        name:"Jugal Kishore, Vrindavan",
        location:"Uttar Pradesh"
    },
    {
        name:"Radha Raman Temple, Vrindavan",
        location:"Uttar Pradesh"
    },
    {
        name:"Prem Mandir, Vrindavan",
        location:"Uttar Pradesh"
    },
    {
        name:"ISKCON, Vrindavan",
        location:"Uttar Pradesh"
    },
    {
        name:"Kesava Deo Temple/Krishna Janmabhoomi Temple, Mathura",
        location:"Uttar Pradesh"
    },
    {
        name:"Dwarkadheesh Temple, Mathura",
        location:"Uttar Pradesh"
    },
    {
        name:"Govind Dev Ji Temple, Jaipur",
        location:"Rajasthan"
    },
    {
        name:"ShriNathji Temple, Nathdwara",
        location:"Rajasthan"
    },
    {
        name:"Dwarkadhish Temple",
        location:"Gujarat"
    },
    {
        name:"Shri Keshavraiji Temple, Bet Dwarka",
        location:"Gujarat"
    },
    {
        name:"Shamlaji Temple, Samalaji",
        location:"Gujarat"
    },
    {
        name:"Jagannath Temple, Ahmedabad",
        location:"Gujarat"
    },
    {
        name:"Bhalka Tirtha &amp; Dehotsarg, Somnath",
        location:"Gujarat"
    },
    {
        name:"Shree Ranchhodraiji Maharaj Mandir, Dakor",
        location:"Gujarat"
    },
    {
        name:"Jagannath Temple, Puri, Odisha",
        location:"Odisha"
    },
    {
        name:"Udupi Sri Krishna Matha, Udupi",
        location:"Karnataka"
    },
    {
        name:"ISKCON, Bangalore",
        location:"Karnataka"
    },
    {
        name:"Balkrishna temple, Hampi",
        location:"Karnataka"
    },
    {
        name:"Venugopala Swamy Temple, Mysore",
        location:"Karnataka"
    },
    {
        name:"Shri Gopal Krishna Temple, Mangalore",
        location:"Karnataka"
    },
    {
        name:"Guruvayur Temple, Guruvayur",
        location:"Kerala"
    },
    {
        name:"Aranmula Parthasarathy Temple, Mallapuzhassery",
        location:"Kerala"
    },
    {
        name:"Ambalappuzha Sri Krishna Temple, Ambalapuzha",
        location:"Kerala"
    },
    {
        name:"Arulmigu Rajagopalaswamy Temple, Tiruvarur",
        location:"Tamil Nadu"
    },
    {
        name:"Trichambaram Temple, Thaliparamba",
        location:"Tamil Nadu"
    },
    {
        name:"Arulmigu Sri Parthasarathyswamy Temple, Triplicane, Chennai",
        location:"Tamil Nadu"
    }
]

let pilgrimTours = [
    {
        name:"GUJRAT",
        locations:"Somnath,  Dwarka and Beyt Dwarka, Nageshwar (Jamnagar), Harsiddhi Mata, Bileshwar Mahadev (Porbandar), Swaminarayan Akshardham (Ahmedabad), Malnath Shiva, Khodiyar Mata, Nishkalank Mahadev (Bhavnagar), Koteshwar Mahadev Narayan Sarovar, Maa Ashapura (Kutch), Bhadreshwar Temple (Gandhidham), Jalaram Bapa, (Rajkot), Stambeshwar Mahadev (Vadodara), Tulsi Shyam (Sasan Gir), Shree Kodhaldham,  Girnar Hill (Junagadh), Bindu Sarovar,  Shankeshwar Parshwanath (Patan), Hastagiri Jain Tirth (Palitana), Kalika Mata Temple (Pavagadh), Bavka Shiva (Dahod), Ranchhodrai (Dakor) Sun temple  (Modhera), Prabhas Shakti Peeth (Veraval,Junagadh)"
    },
    {
        name:"MADHYA PRADESH",
        locations:"Omkareshwar, Rameshwar, Gauri Somnath, Mamleshwar (Omkareshwar), Mahakaleshwar,Chintaman Ganesh, Ganesh, Bada Ganesh, Kal Bhairav, Bhairav Parvat, Shri Dwarkadhish Gopal Mandir, Harsiddhi, Siddhwat  (Ujjain), Adinath, Javari, Kandariya Mahadeo, Matangeshwar, Lakshmana, Beejamandal (Khajuraho), Chaturbhuj, Ram Raja (Orchha), Saas Bahu, Teli ka Mandir, Bateshwar Adhyatma Niketan (Gwalior) Khajrana Ganesh, Annapurna Temple (Indore), Bhojeshwar Temple (Bhojpur), Maihar Sharda Devi, Bhumara (Satna), Bijasan Mata (Salkanpur), Maa Chamunda (Dewas), Ratangarh Mata, Pitambara Peeth (Datia), Bharat Milap Mandir, Sati Anusuya, Tulsi Peeth  (Chitrakoot), Narmadeshwar, Kalmadhav (Amarkantak), Lakshmi Narayana (Bhopal), Chauragarh  (Pachmarhi), Jaleshwar (Maheshwar), Chausath Yogini (Jabalpur), Chausath Yogini, Bateshwar (Morena), Pashupatinath (Mandsaur), Aantri Mata, Bhadwamata (Neemuch), Dada Darbar (Khandwa), Gadarmal Devi, Mangla Devi (Vidisha), Kali Bari (Chhindwara), Nachna (Panna), Shyam Kaka (Rajgarh), Tigawa (Katni),  Bagalamukhi (Agar Malwa)."
    },
    {
        name:"RAJASTHAN",
        locations:"Birla, Galtaji, Govind Devji, Akshardham, Moti Dungri (Jaipur), Karni Mata (Bikaner), Manibandh Shakti peeth, Brahma (Pushkar), Shrinathji  Nathdwara, Ambika Mata Eklingji, Chamunda Mata, Jagdish (Udaipur), Balaji (Mehandipur) Rani Sati (Jhunjhunu) Salasar Balaji (Churu) Parshuram Mahadev (Pali) Jain Temple (Ranakpur) Tanot Mata (Jaisalmer) Dilwara (Mount Abu) Achal Nath Baba Ramdev, Kunj Bihari  (Jodhpur) Andeshwar Parshwanath, (Kushalgarh Banswara) Madareshwar Shiva  (Banswara), Kalika Mata, Sanwaliyaji, Avari Mata (Chittorgarh) Charbhuja (Kumbhalgarh), Laxman, (Bharatpur) Lodurva (Jaisalmer), Dhuni Mata, Trinetra Ganesha, (Ranthambhore), Balaji Temple  (Dausa), Shri Mahaveer Ji (Chandanpur Karauli), Kaila Devi, Madan Mohan (Karauli), Kalpavriksh  (Bilara), Jeenmata (Sikar)"
    },
    {
        name:"JAMMU & KASHMIR",
        locations:"Mata Vaishno Devi, Raghunath, Bahu, Buddha Amarnath, Gurudwara Shri Guru Nanak Dev Ji, Ranbireshwar, Peer Kho Cave, Baboor, Kol Kandoli, Shiv Khori, Sharada Mandir  (Jammu), Mahamayi Shakti peeth, Amarnath (Pahalgam), Peer Kho Temple (Jammu), Shri Parvat Shakti Peeth (Ladakh), Avantipur, Kheer Bhavani, Shankaracharya Temple,  (Srinagar), Sudh Mahadev ( Patnitop), Gurudwara Nangali Sahib (Poonch), Shankar Gaur Ishvara (Baramulla)."
    },
    {
        name:"PUNJAB AND HARYANA",
        locations:"Bhawani Amba, Panchmukhi Hanuman, Jandli Shani Dev (Ambala) Brick Temples (Kaithal) Jayanti, Chandi, Bhima (Chandigarh) Savithri Shakti Peeth, Sita Mai (Sitamai) Sthaneshwar Mahadev (Thanesar Kurukshetra) Sheetala Devi, Shiv kund  (Gurugaon) Bhadrakali Temple, Bhishma Kund, Birla Gita Mandir (Brahma Sarovar Kurukshetra) Chandi, Kalika, Mansa, Devi (Panchkula) Siddhidata (Badkhal-Surajkund) Pashupatinath, Prachi Shiva (Pehowa), Bhuteshwar (Jind). Akal Takht,Harmandir Sahib / Golden Temple, Durgiana, Shri Ram Tirth (Amritsar), Suraj Kund (Sunam), Nagni, Shiv Mandir Kathgarh, Mukteshwar Mahadev (Pathankot), Kali Devi (Patiala), Julfa Mata Temple, Anandpur Sahib (Rupnagar), Tripurmalini Shakti Peeth, Devi Talab, Tulsi Mandir (Jalandhar), Jayanti Devi, Gurdwara Patalpuri (Ropar), Gurdwara Manji Sahib (Ludhiana) Gurdwara Fatehgarh Sahib (Fatehgarh), Gurdwara Sri Tarn Taran Sahib (Tarn Taran), Baba Kanaiya Gir (Hoshiarpur)), Panch Mandir (Kapurthala), Maiser Khana, Muktsar Gurdwara (Bhatinda)"
    },
    {
        name:"HIMACHAL PRADESH",
        locations:"Naina Devi, Baba Balak Nath, Vyas Gufa (Bilaspur), Chintpurni Shakti Peeth (Una), Chamunda, Jwala, Bajreshwari, Baglamukhi, Trilokpur, Baijnath, Masrur  (Kangra), Baijnath (Palampur), Lakshminarayan (Chamba), Chaurasi,Chattari (Bharmour), Tarna Devi, Rewalsar, Shikari Devi, Bhootnath (Mandi), Prashar (Pandoh), Hanogi Maa, Koyla Maa (Sunder Nagar), Raghunathji, Narvadeshwar, Bijli Mahadev (Kullu), Hadimba Devi, Maa Sharvari, Vashisht (Manali), Bhimakali (Sarahan), Tara Devi, Jakhu And Sankat Mochan, Hatkoti (Shimla), Renuka (Nahan, Sirmour)."
    },
    {
        name:"UTTARAKHAND",
        locations:"Kunjapuri (Rishikesh), Maya Devi, Chandi Devi, Har Ki Pauri, Mansa Devi (Haridwar), Yamunotri Gangotri (Uttarkashi), Hemkund, Joshimath Kalpeshwar, Karnaprayag Madhyamaheshwar, Rudranath, Nandaprayag, Kedarnath, Badrinath (Garhwal, Chamoli), Shree Moteshwar / Bheem Shankar Mahadev (Kashipur), Baleshwar, Purnagiri Devi (Champawat), Surkanda Devi (Tehri), Naina Devi (Nainital), Mahasu Devta (Hanol Chakrata), Tungnath, Koteshwar Mahadev, Kartik Swami, Hariyali Devi, Guptakashi, Ukhimath, Triyuginarayan Temple (Rudraprayag), Nanda Devi, Goljyu Devta, Jageshwar (Almora), Chandrabadani (Sabdarkhal) Garjiya Devi (Rmanagar)."
    },
    {
        name:"UTTAR PRADESH",
        locations:"Vindhyavasini (Mirzapur), Bankey Bihari, Radha Raman, RadhaVallabh, Shahji, Katyayani / Uma shakti Peeth, Radha Damodar , Ranganatha (Vrindavan), Prem Mandir (Mathura), Kashi Vishwanath, Panchasagar Shakti Peeth, Vishalakshi Gauri, Kamakhya, Sankat Mochan  (Varanasi), Hanuman Garhi, Ram Janmabhoomi (Ayodhya), Gorakhnath (Gorakhpur), Augharnath (Meerut), Chitrakoot shakti Peeth (Chitrakoot), Prayag Shakti Peethas (Allahabad)"
    },
    {
        name:"BIHAR",
        locations:"Kunjapuri (Rishikesh), Maya Devi, Chandi Devi, Har Ki Pauri, Mansa Devi (Haridwar), Yamunotri Gangotri (Uttarkashi), Hemkund, Joshimath Kalpeshwar, Karnaprayag Madhyamaheshwar, Rudranath, Nandaprayag, Kedarnath, Badrinath (Garhwal, Chamoli), Shree Moteshwar / Bheem Shankar Mahadev (Kashipur), Baleshwar, Purnagiri Devi (Champawat), Surkanda Devi (Tehri), Naina Devi (Nainital), Mahasu Devta (Hanol Chakrata), Tungnath, Koteshwar Mahadev, Kartik Swami, Hariyali Devi, Guptakashi, Ukhimath, Triyuginarayan Temple (Rudraprayag), Nanda Devi, Goljyu Devta, Jageshwar (Almora), Chandrabadani (Sabdarkhal) Garjiya Devi (Rmanagar)."
    },
    {
        name:"UTTARAKHAND",
        locations:"Sundarnath, Maa Khadgeshwari Kali Mandir (Araria), Budhanath, Ajgaivinath (Bhagalpur), Shri Adinath Akhara (Buxar), Mitheshwarnath Shiva, Kali Mata, Shyama Kali, Ahalya Sthan, Mithila Shakti Peeth (Darbhanga), Ugna Mahadev, Kapileshwar, Rameshwarnath, (Madhubani), Mundeshwari Devi (Kaimur), Ashokdham  (Lakhisarai), Baba Garibnath Dham, Chaturbhuj, Shri Ram (Muzaffarpur), Nair, Shitala Mata, Patan Devi, Mahavir Mandir, Pataliputra Theerth, Harmandir Gurudwara (Patna), Khudneshwar Asthan (Samastipur), Mahendra Nath, Vishnudham (Siwan), Chaumukhi Mahadev, Lal Keshwar Shiv, Pataleshwar, Budhi Mai, Ramchaura, Baithakji, Bawan Pokhar (Vaishali), Aami Mandir (Saran),  Mangla Gauri, Vishnupad, Prapitaamaheshwara (Gaya), Mahabodhi, Dungeshwari Cave (Bodhgaya),Chandika Sthan (Munger), Maa Tara Chandi (Sasaram), Thawe Mandir (Gopalganj), Sita-Kund, Haleshwar Sthan, Janki Mandir (Sitamarhi), Mahavir Balaji, Mandargiri (Banka), Deo, Umga (Aurangabad), Singheshwar (Madhepura), Jal Mandir, Maniyar Math, Stupa Sita (Nalanda), Viraat Ramayan (Kesaria), Vishnudham (Bherwanian), Durga Mandir (Bettiah)."
    },
    {
        name:"JHARKHAND",
        locations:"Amreshwar Dham Shiv Temple (Khunti), Baidyanath, Karneshwar Dham, Naulakha, Tapovan, Basukinath (Deoghar), Bindudham (Sahibganj), Chhinnamastika (Ramgarh), Gayatri Gyan Mandir, Rani Sati  (Dhanbad), Harihar Dham, Jharkhand Dham, Parasnath, Madhuban (Giridih), Jagannath, Dewri, Pahari, Surya Temple (Ranchi), Kauleshwari, Bhadrakali  (Chatra), Maluti (Dumka), Shiv Shani, Sri Sri Kalika Maharani (Bokaro), Jayda Temple (Kharsawan), Prachin Shiv Mandir (Lohardaga), Maa chanchala devi  (Koderma), Radha Krishna (Garhwa)"
    },
    {
        name:"CHHATTISGARH",
        locations:"Maa Bamleshwari Devi, Patal Bhairavi (Rajnandgaon), Mahamaya, Ratanpur, Deorani-Jethani (Bilaspur), Danteshwari, Chandratiya (Dantewada), Maa Chandrahasini, Ghatadia Paharia Tripur Sundar Devi, Ashtabhuji, Pithampur Shiv Mandir, Vishnu Mandir, Madanpurgarh Devi, Laxmaneshwar, Turridham, Chandrahasini Devi (Janjgir–Champa),   Banjari (Rajgarh), Jatmai Ghatarani, Dudhadhari, Maa Pitambara, Mata Kaushalya, Chandi, Vallabhacharya, Rajim, Hatkeshwar,  (Raipur), Shivani Maa (Kanker), Amarkantak (Maikal), Bhoramdeo (Kabirdham), Ganga Maiya, Dongergarh, Mahadev Temple (Durg), Kudargarh (Surajpur), Laxman, Gandheswar (Sirpur), , Shankar sanctuary - Baituk Bhairav and Kal Bhaurav."
    },
    {
        name:"NORTHEAST",
        locations:"Kamakhya Devi, Bhuvaneswari, Billeswar, Sri Surya Pahar, Asvakranta, Ugra Tara, Sivasagar Sivadol, Vishnu Temple, Vasishta Sharma, Umananda, Tamresvari, Sukreswara , Negriting, Navagraha, , Kedareswara , Hayagriva Mahadeva, Hatimura, Devi Temple, Devi Dol Temple, Barpeta Satra (Assam), Parsuram Kund, Akashganga, Malinithan, Tawang Monastery, Bomdila Monastery (Arunachal Pradesh), Unakoti, Tripura Sundari  (Tripura), Sri Govindajee, Mahabali (Manipur), Nartiang Durga (Meghalaya), Dimapur Kalibari (Nagaland), Om temple (Mizoram) Parbateyswar Shivalaya, Viswa Vinayak, Ganesh Tok-Hanuman Tok, Thakurbari, Kirateshwar Mahadev, Rumtek Monastery, Enchey Monastery, Samdruptse Hill (Sikkim),"
    },
    {
        name:"WEST BENGAL",
        locations:"Mahakal temple, Dhirdham, Jagdish Mandir Kurseong, Ghoom Monastery (Darjeeling), Tristrota (Jalpaiguri) Ananta Basudeba, Brindaban Chandra Math, Ghanteshwar, Hangseshwari, Jagatnagar Kalibari, Taraknath, Anandamayee, Ratnavali  (Hooghly), Annapurna (Titagarh), Attahas, Dwarbasini, Ekachakra, Tarapith, Nandikeshwari, Nalateswari, Kankalitala, Bakreswar (Birbhum), Baidyapur Jora Deul, Ichhai Ghosher Deul, Kalyaneshwari, Khaepa Kali Tala, Ghagar Buri, Bahula   (Bardhaman), Bargabhima, Bheemakali, Jagannath (Medinipur), Bhavaniswar, Char Bangla, Kiriteswari, Ramakrishna Mission Sevashrama (Murshidabad), Rasmancha, Jor-Bangla, Pancha Ratna, Madanmohan, Lalji , Radhya Shyam, Nandalal, Kalachand, Radhabinod, Madangopal, Murali Mohan, Radha Govinda, Radha Madhab, Chhinnamasta , Sanreswar , Malleswar, Mrinmayee, Krishna-Balaram, Sarbamangala, Jor Mandir (Bishnupur, Bankura), Chakbhabani Kalibari (Balurghat), Deulghata (Purulia), Jatar-Deul, Sri Ramkrishna Ashrama (South 24 Parganas), Madhupur Satra (Cooch Behar), Nrisingha Temple, Sri Devananda Gaudiya Math, Mayapur  (Nadia), Belur Math, Kaleshwa Mandir, Madangopal Jiu, Kalighat Kali (Howrah), Rampara Kalibari, Lakshmi Narayan (Kolkata)."
    },
    {
        name:"ODISHA",
        locations:"Jagannath, Gundicha, Mausi Maa, Sakshigopal, Sri Lokanath, Ramchandi, Alaranatha, Maa Mangala  (Puri), Maa Tara Tarini (Purusottampur), Surya Temple, Ramachandi (Konark), Lingaraja, Brahmeswara, Mukteshwar, Parsurameswara, Rajarani, Vaital Deula, Ram Mandir, Ananta Vasudeva, Buddhanath, Akhadachandi, Baitala Deula, Bharati Matha,, Bhagabati (Bhubaneswar), Chandi, Laxminrusingha, Madhava, Chhatia Bata, Dhabaleswar, Bhattarika, Banki charchika  (Cuttack), Chausathi Jogini, Harishankar (Balangir ), Kalijai (Chilika), Baladev Jew, Sri Lakshmi Varaha Swamy Temple (Kendrapara), Balakumari  (Ganjam,)  Banjari, Manikeswari (Kalahandi), Chari Sambhu (Boudh), Devagiri (Rayagada), Hanuman Vatika (Rourkela), Sri Harisankar Devasthana (Balangir), Sri Nrusinghanatha (Bargarh), Sri Nilamadhava, Ladukeswar mahadev (Nayagarh), Khirachora Gopinatha, pancha lingeswar (Balasore),  Sarala, Gorekhnath (Jagatsinghpur), Biraja, Mahavinayak (Jajpur), Ghata Gaon Tarini (kendujhara), Samaleswari, Ghanteswari (Sambalpur), Gupteswar (koraput), Maa Hingula (Talcher), Kapilasha, Shunya mandira (Dhenkanala)"
    },
    {
        name:"TELANGANA",
        locations:"Chilkur Balaji, Birla Mandir, Sanghi, Keesaragutta, Karmanghat Hanuman, Surendrapuri, Sri Ranganathaswamy, Sri Peddamma Thalli  (Hyderabad), Beechupally Anjaneya Swamy, Sangameshwar, Gurudwara Maji Sahib (Mahabubnagar), Kondagattu, Sri Raja Rajeshwara, Kaleshwaram, Dharmapuri (Karimnagar), Thousand Pillars, Ramappa, Bhadrakali, Komuravelli Mallikarjuna Swamy, Saraswati (Warangal),Gnana Saraswathi (Nirmal), , Lakshmi Narasimha (Yadadri Bhuvanagiri), Bhadrakali, Sita Ramachandraswamy (Bhadrachalam) Saleshwaram Lingayya Swamy (Nallamala forest), Alampur Jogulamba (Alampur), Devunigutta (Mulugu), Pachala Someswara, Chaya Someswara Swamy, Padmakshi,  (Nalgonda), Sri Stambhadri Lakshmi Narasimha Swamy, Garlavoddu Sri Lakshmi Narasimha Swamy, Sri Venkateshwara Swamy   (Khammam), Kaleshwara Mukteswara Swamy (Jayashankar Bhupalpally), Keesaragutta (Medchal−Malkajgiri), Meenakshi Agastyeswara Swamy (Vadapalli)"
    },
    {
        name:"ANDHRA PRADESH",
        locations:"Tirumala Venkateswara, Sri Padmavathi Ammavari (Tirupati), Kanaka Durga, Paritala Anjaneya Swamy, Malleshwara (Vijayawada), Siva Mallikarjuna, Mallikarjuna Swamy (Srisailam), Lepakshi, Ahobilam, Sri Kadiri Lakshmi Narasimha Swamy, Veerbhadra (Anantapur), Yaganti, Mantralayam, Mahanandi (Kurnool), Simhachalam, Devipuram (Visakhapatnam), Kanipakam Vinayaka (Chittoor), Srikalahasti, Mangalagiri, Amaralingeswara Swamy Temple Amaravathi (Guntur), Ranganatha (Nellore), Lakshmi Narasimha Swamy Temple Antarvedi, Jaganmohini Kesava Swamy ( East Godavari), Sri Ksheera Rama (West Godavari) Annavaram (Ratnagiri), Kurma, Arasavalli (Srikakulam), Srikalahasteeshwara (Srikalahasti), Samarlakota, Draksharamam Bhimeswara Swamy, Kukkuteswara Swamy temple (Kakinada) Sri Ksheera Rama, Sri Someswara, (West Godavari) Antharvedi, Godavari tir Shakti (Rajahmundry)."
    },
    {
        name:"TAMIL NADU",
        locations:"Meenakshi Amman, Thiruparankundram, Alagar Koil  (Madurai), Adi Kumbeswarar, Brahma, Periya Uchipillaiyar, Uppiliappan, Sri Maha Ganapathi, Mayiladuthurai, Swamimala, Thirubhuvanam, Sri Rajagopalaswamy (Kumbakonam), Brihadeeswarar, Abhishtavaradha Ganapathi, Ganapatheeswarar, Khabartheesar Karpaga Nathar, Gangaikondacholapuram, (Thanjavur), Sri Rajagopala Swamy (Mannargudi), Jambukeswarar (Thiruvanaikaval), Kanchi Kailasanathar, Ekambareswarar, Kamakshi Amman, Thiruthani  (Kanchipuram), Ramanathaswamy, Thirupullani (Rameshwaram), Mayuranathaswami  (Mayiladuthurai), Kapaleeshwarar, Jambhulinga Vinayagar (Chennai), Monolithic Rock Temples (Mahabalipuram), Papanasam, Manimoortheeswaram, Tenkasi, Sivasailam, Narubunatha Swamy, Sankaranarayana Swamy, Thirukkurungudi, Arulmigu Sorimuthu Ayyanar, Sri Vaikuntanatha Perumal, Sri Vaikuntanatha Swamy (Tirunelveli), Srivilliputhur Andal (Virudhunagar), Nagaraja (Nagercoil), Kumari Amman, Mondaicaud Bhagavathi, Sri Adikesava Perumal Thiruvattaru  (Kanyakumari), Thillai Nataraja, Thirukkadaiyur (Chidambaram), Annamalaiyar, Arunachaleswara (Tiruvannamalai), Sripuram Golden Temple, Lakshmi Narasimha Swami (Vellore), Bala Murugan (Siruvapuri), Navapashanam (Devipattinam), Arulmigu Brahmapureeswarar (Tirupattur), Elk Hill Murugan (Ooty), Karpaka Vinayaka (Sivaganga), Ucchi Pillayar, Ranganathaswamy Srirangam, Samayapuram Mariamman  (Tiruchirapalli), Manakula Vinayagar (Pondicherry), Sri Poyyamozhi Vinayagar (Theevanur), Adi vinayagar, Thyagaragar (Thiruvarur), Panchamukha Anjaneyar (Thiruvallur), Naramuga Vinayakar (Cuddalore), Sri Anubhavi Subramaniar, Eachanari Vinayakar, Puliakulam Vinayakar, Arulmigu Prasanna Vinayagar (Coimbatore), Sree Vigneswarar (Ariyalur), Murugan, Arulmigu Subramania Swamy (Thiruchendur), Murugan, Dhandayuthapani (Palani), Saniswaran (Tirunallar), Bannari Amman (Erode), Anjaneyar (Namakkal), Vaitheeswaran Koil (Nagapattinam), Thirumoorthy (Pollachi)."
    },
    {
        name:"KERALA",
        locations:"Sree Padmanabhaswamy, Pazhavangadi Ganapathy, Attukal Bhagavathy, Udiyanoor Devi, Pathiyanadu Sree Bhadrakali, Andoor Kandan Sree Dharma Sastha, Edava Palakkavu Bhagavathi, Karikkakom Sree Chamundi Devi, Sarkara Devi, Sreekanteswara, Vellayani Devi (Thiruvananthapuram), Sabarimala (Pathanamthitta), Sree Krishna (Ambalapuzha), Srikrishna (Guruvayoor), Tali, Thirunelli (Wayanad), Vadakkunnathan (Thrissur), Aranmula Parthasarathy (Mallapuzhassery), Sivagiri (Varkala), Mannarasala Nagaraja (Haripad), Sree Muthappan (Parassinikadavu), Lokanarkavu (Villiappally), Thiruvanchikulam Shiva (Kodungalloor), Ganapathy (Kottarakkara), Ayyappa (Pandalam), Chottanikkara (Ernakulum), Lake Temple (Ananthapura), Malayalappuzha, Srimad Anantheswara (Madhur), Thiruvallam Parasurama (Kovalam), Mahadeva (Mammiyoor), Mahadeva (Vaikom), Mahadeva (Kaviyoor), Mahadeva (Chengannur), Ettumanoor Mahadeva (Kottayam), Nilakkal Mahadeva (Perunad), Thiruvanchikulam Shiva (Kodungallur), Thirupalkadal Sreekrishnaswamy (Keezhperoor), Ettumanoor (Kottayyam), Valiya Koonambaikulam, Sree Puthiyakavu Bhagavathy, Sree Umamaheshwara Swami, Ashramam Sri Krishna Swamy (Kollam), Kidangamparambu Sree Bhuvaneswari, Venkatachalapathy (Mullakkal), Chakkulathukavu Devi, Chettikulangara Bhagavathi (Alappuzha), Malayalapuzha Devi, Thazhoor Bhagavathi Temple, Sri Kodumthara Subrahmanya Swamy Temple, Omalloor Sree Rakthakantaswamy, Pandalam Mahadeva (Pathanamthitta), Thirunakkara Mahadeva, Thaliyil Mahadeva,, Kumaranalloor Karthyayani Devi, Pallipurathukavu Devi (Kottayam), Mangala Devi Kannaki, Ulupooni Sree Arthanareeswara, Sree Krishna Swami, Kozhikkanam Devi, Vellappara Devi (Idukki), Shiva, Sree Poornathrayeesa, Ameda, Thrikkakkara Vamana Moorthy, Mahadeva (Ernakulam), Sri Vadakkumnathan Shiva, Paramekkavu Bhagavathi, Thiruvambady Sri Krishna, Punkunnam Shiva, Urakathamma Thiruvadi (Thrissur), Bhagavathi, Sree Emoor Bhagavathy, Vishnu, Manappulli Bhagavathy (Palakkad), Podiyattupara Mahadeva Temple, Sree Kadampuzha Bhagavathi, Thirunavaya Nava Mukunda Temple, Sree Tripuranthakam Mahasiva, Sree Triprangode (Malappuram), Varakkal Devi, Srikanteshwara Thiruvachira, Sree Krishna Temple, Thalikkunu Maha Siva (Kozhikode), Thirunelli Sree Maha Vishnu, Seetha Devi, Valliyoorkavu Melekavu, Mazhuvannur Maha Siva Temple, Sree Cheengeri Bhagavati (Wayanad), Sree Sundareswara, Muthappan, Pillayar Kovil Kalarivathukkal Bhagavathi, Trichambaram (Kannur), Shree Varadaraja Venkataramana, Mallikarjuna Temple, Sri Ananthapadmanabha Swamy Temple, Trikannad Trimbakeshwar, Nagarajakatte (Kasaragod)"
    },
    {
        name:"KARNATAKA",
        locations:"Sri Krishna, Ashta Mathas, Sri Gude Mahalingeshwara, Santhoor Subramanya, Anegudde Vinayaka Temple, Yelluru Shri Vishweshwara (Udupi), Sri Venkataramana Temple (Karkala),Vidyashankara, Sharada Peetham and Temple (Sringeri), Shiva Idagunji  Ganapati (Murudeshwar), Vitthala Temple, Sree Virupaksha (Hampi), Mahabaleshwar (Gokarna), Chennakeshava (Belur), Hoysaleswara (Halebidu), Hasanamba, Sri Mahantheshwara Mata Karegudda, Bucheshwara, Lakshmi Devi Doddagaddavalli, Lakshmi Narasimha, Amaragiri Malekal Tirupati, Ishvara, Sri Lakshmi Venkataramanaswamy (Hassan),  Kotilingeshwara, Someshwara, Kolaramma, Antharagange, Kurudmale Ganesha (Kolar), Banashankari, Bhutanatha, Mahakuta, Veerabhadra (Badami Cave), Kudalasangama (Bagalkot), Keshava (Somnathpur), Mookambika (Kollur), Mallikarjuna (Pattadakal), Kedareshwara Balligavi, Aghoreshwara Sagar, Lakshmi Narasimha, Talagunda Pranaveshwara, Tripurantaka  (Shimoga), Durga Gudi (Aihole), Amruteshwar  (Annigeri), Siddhesvara, Nagareshvara Bankapura, Galageshwara, Mukteshwar, Madhukeshwara, (Haveri), Veera Narayana  (Belavadi), Amrutesvara  (Amruthapura), Manjunatha (Dharmasthala), Kukke Subramanya (Sullia), Mahaganapathi (Guddattu), Gommateshwara, Brahmeshvara, Yediyuru Siddhalingeshwara (Shravanbelagola),  ISKCON, Ranganatha Swamy Magadi, Ghati Subramanya Doddaballapur, Bheemalingeswara, Bhoga Nandeeshwara, Chamarajashwara, Channakeshava, Gaurishwara, Gangadhareshwara, Sri Kabbalamma, Muthyala Madugu, Sri Shanimahathma, Venugopalaswamy, Yediyur Siddhalingeshwara Swamy (Bangalore), Polali Rajarajeshwari, Nellitheertha Cave, Kateel Durgaparameshwari, Bappanadu Mulki Durgaparameshwari, Shri Agnidurga Gopalakrishna Maha kala Bhairava, Karamogaru, Shri Kadri Manjunatha, Mangaladevi, Gokarnanatheshwara, Sri Karinjeshwara, Shree Panchalingeshwara, Surya Sadashiva, Thousand Pillars Moodbidri  (Mangaluru), Shri Vinayaka Shankaranarayana Durgamba (Bantwal) Chamundeshwari, Chikkadevvamma, Yoga Narasimha Melkote, Cheluvanarayana Swamy, Nanjangud, Thirunayanapuram (Mysuru), Sri Ranganathaswamy,   Karighatta Srinivasa   (Srirangapatna) Mudukuthore Mallikarjuna, Keshava, Chennakesava,  (Somnathpur) Betta Byraveshwara (Sakleshpur), Lakshminarayana, Brahmeshvara, Panchalingeshwara, Basaralu (Mandya),  Navagraha Teertha Jain, Nuggikeri Hanuman, Banashankari, Chandramouleshwara, Shambhulinga, Shri Kalika Devi  (Hubli), Sri Mahalakshmi Lakkamma devi, Horanadu Annapurneshwari, Shri Kalaseshwara Kalasa, Sri Dattatreya Swamy, Kalhatti falls, Veerabhadreshwara Tarikere Kemmannagundi (Chikkamagaluru), Sri Lakshmi Venkateshwara, Trikuteshwara, Nanesvara, Kasivisvesvara, Someshwara, Doddabasappa, Amruteshwara, Brahma Jinalaya, Kalakeshwara, Mahadeva, Navalinga, Veeranarayana  (Gadag), Narasimha Swamy, Siddara Betta, Sree Siddaganga  Devarayanadurga, Sri Mahalakshmi Goravanahalli, Shri Mahalakshmi Gubbi  (Tumakuru), Shree Mahalingeshwara (Puttur), Talacauvery, Bhagamandala (Coorg), Gopalaswamy Betta (Bandipur), Chandramouleshwara (Arasikere) Sri Kalika Devi, Bhoo Varaha Laxmi Narasimha, Hooli Panchalingeshwar, Kamal Basadi,   Halasi Jaina, Kamala Narayana, Saundatti, Yellamma (Belgaum), Biligiri Ranga, Male Mahadeshwara Betta (Chamarajanagar), Sri Venkataramana, Tarakeshwara, Nagareshvara / Siddheswara Bankapura (Sirsi), Siddeshwara Betta (Ramanagara), Kalleshwara, (Bijapur),  Kalleshvara, Sri Anjaneya Swamy, Durgambika, Shri Guru Kottureshwara, Harihareshwara (Davanagere), Mahadeva, (Koppal), Bhoga Nandeeshwara, Bheemalingeswara Kaiwara (Chikkaballapura), Lingeshwara, Kuruvathi, Basaveshwara, Krauncha Giri (Bellary), Aranya Devi, Papnash Shiva, Narasimha Jhira Cave, Nanak Jhira Gurudwara   (Bidar), Chitradurga Temples, Tarakeshwara (Dharwad), Manik Prabhu, Sri Kshetra, Sharana Basaveshwara (Gulbarga), Vaidyanatheswara (Talakad)"
    },
    {
        name:"GOA",
        locations:"Shri Kamakshi Shiroda, Shri Shantadurga Quepem, Chandreshwar Bhootnath Quepem, Shri Damodar Sanguem, Vimaleshwar Sanguem, Shri Saptakoteshwar Bicholim, Mahamaya Kalika Saunsthan Bicholim, Shri Betal  Bicholim, Sharvani Devasthan Bicholim,  Mahadeva Surla, Mallikarjuna Canacona, 1008 Shri Adinath Digambar Jain Mandir Margao, Shri Damodar Margao (South Goa), Maruti Ponda,  Mahalaxmi Ponda, Mangeshi Ponda, Shri Nagesh  Ponda, Shri Ramnath Ponda, Shri Bhagavati Ponda, Madhav Govind Rameshwar Ponda, Shri Mandodari Ponda, Ramnathi Ponda, Sri Vijayadurga Ponda, Devkikrishna Devasthan Marcella, Brahma Satari, Laxmi Narasimha Mardol, Shri Rudreshwar Sanquelim, Baingineshwar Velha, Mahalasa Priol (North Goa)."
    }
]
const range = (start, end, length = end - start + 1) => Array.from({ length }, (_, i) => start + i)

for (let i of range(1, 52)){
    i = String(i)
    const startIndex = shaktiVar.indexOf(i)
    const endIndex = shaktiVar.indexOf(Number(i) + 1)
    shaktiPeeth.push(shaktiVar.slice(startIndex, endIndex));
}
console.log(shaktiPeeth)
export default function() {
    useEffect(() => {
            // adding limit to package names inside individual package
        let currentYearDOM = document.querySelector(".current-year")
        let tourInfo = document.body.querySelectorAll('.tour-info')
        let packageName = document.body.querySelectorAll('.package-name')
        for(let i=0;i < tourInfo.length;i++){
            tour = tourInfo[i]
            pack = tour.querySelectorAll('.package-name')
            if(pack.length > 10){
                for(let j=pack.length; j > 10; j--){
                    pack[j-1].classList.add('hidden')
                }
            }
        }

        // adding current year in footer
        if (currentYearDOM !== null){
            currentYearDOM.textContent = new Date().getFullYear();
        }

        // setting rows length in tours.html to 3 for now
        const tableBody = document.querySelectorAll('.table-body')
        tableBody.forEach(function(table){
            let tableRow = table.querySelectorAll('#table-row');
            if(tableRow.length >= 11){
                for (let k=tableRow.length - 1; k > 9;k--){
                    const specificRow = tableRow[k]
                    table.removeChild(specificRow)
                }
            }
        })
        
        // JQuery for slide show

        var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
        // Apply to all slideshows that you define with the markup wrote
        slideshows.forEach(initSlideShow);

        function initSlideShow(slideshow) {
            console.log(slideshow);
            var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

            var index = 0, time = 5000;
            slides[index].classList.add('active');  
            
            setInterval( () => {
            slides[index].classList.remove('active');
            
            //Go over each slide incrementing the index
            index++;
            
            // If you go over all slides, restart the index to show the first slide and start again
            if (index === slides.length) index = 0; 
            
            slides[index].classList.add('active');

            }, time);
        }

        if (window.innerWidth <= "500px"){
            myContainer = document.querySelector(".my-container")
            myContainer.classList.add("font-size-small")
            console.log("called");
        }
        const images = document.querySelectorAll('.link-img')
        const displayImage = document.querySelector('.display-img')
        images.forEach(function(image){
            image.addEventListener('click', function(){
                const imageSrc = image.src;
                const imgTag = displayImage.querySelector('img')
                imgTag.src = imageSrc
                displayImage.classList.toggle('hidden')
            })
        })

  }, [])
    return <>
        <Navbar />
        <div className="my-container">
            <center className="font-weight">Sacred Yatra with Venture World.</center>
            <center><p>Experience the Darshan in harmony with the Divine in search of moral and spiritual awakening.</p></center>
            <div id="slideshow-example" data-component="slideshow">
                <div role="list">
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/pilgrimage/dwarka.jpg" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/pilgrimage/ganpati-pule.jpg" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/pilgrimage/pilgrimage-1.jpeg" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/pilgrimage/kedarnath-temple.webp" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/pilgrimage/pilgrimage-2.jpeg" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/pilgrimage/bellur.jpg" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/pilgrimage/badrinath-temple.jpg" alt="err"/>
                    </div>
                </div>
            </div>
            <p>Yatris can choose and make their own itinerary from the following options. For more details and
            Yatra cost please contact Venture World.</p>
            <table className="table table-striped table-bordered border-secondary">
                <tbody>
                    {pilgrimsList.map((pilgrimage, index) => {
                        return <tr key={index}>
                            <td width={"20%"}>{pilgrimage.days}</td>
                            <td>
                                {pilgrimage.heading ? <center className="underline">{pilgrimage.heading}</center> : null} <br />
                                
                                {pilgrimage.pointOne ? <p><span className="underline">{pilgrimage.pointOne}</span> - {pilgrimage.pointOnePara}</p> : null}
                                {pilgrimage.pointTwo ? <p><span className="underline">{pilgrimage.pointTwo}</span> - {pilgrimage.pointTwoPara}</p> : null}
                                {pilgrimage.pointThree ? <p><span className="underline">{pilgrimage.pointThree}</span> - {pilgrimage.pointThreePara}</p> : null}
                                {pilgrimage.pointFour ? <p><span className="underline">{pilgrimage.pointFour}</span> - {pilgrimage.pointFourPara}</p> : null}

                                {pilgrimage.pointHeadOne ? <p><span className="font-weight">{pilgrimage.pointHeadOne}</span> - {pilgrimage.pointHeadParaOne}</p> : null}
                                {pilgrimage.pointHeadTwo ? <p><span className="font-weight">{pilgrimage.pointHeadTwo}</span> - {pilgrimage.pointHeadParaTwo}</p> : null}
                                {pilgrimage.pointHeadThree ? <p><span className="font-weight">{pilgrimage.pointHeadThree}</span> - {pilgrimage.pointHeadParaThree}</p> : null}
                                {pilgrimage.pointHeadFour ? <p><span className="font-weight">{pilgrimage.pointHeadFour}</span> - {pilgrimage.pointHeadParaFour}</p> : null}
                                
                                {pilgrimage.pointHeadUnderOne ? <p className="font-weight"><span className="underline">{pilgrimage.pointHeadUnderOne}</span> - {pilgrimage.pointHeadParaOne}</p> : null}
                                {pilgrimage.pointHeadUnderTwo ? <p className="font-weight"><span className="underline">{pilgrimage.pointHeadUnderTwo}</span> - {pilgrimage.pointHeadParaTwo}</p> : null}
                                {pilgrimage.pointHeadUnderThree ? <p className="font-weight"><span className="underline">{pilgrimage.pointHeadUnderThree}</span> - {pilgrimage.pointHeadParaThree}</p> : null}
                                {pilgrimage.pointHeadUnderFour ? <p className="font-weight"><span className="underline">{pilgrimage.pointHeadUnderFour}</span> - {pilgrimage.pointHeadParaFour}</p> : null}

                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <h6 className="font-weight">10 Days and above</h6>
            <p className="font-weight" style={{marginBottom:0.5}}>12  Jyotirlingas:</p>
            <p style={{marginLeft:"1rem"}}>*Bhimashankar (Rajgurunagar, Pune Maharashtra), *Somnath  (Gujarat), *Mallikarjuna  
                (Srisailam, Andhra Pradesh), *Mahakaleshwar (Ujjain, Madhya Pradesh),
                *Omkareshwar (Shivapuri,  Khandwa,  Madhya Pradesh), *Kedarnath  (Uttarakhand),
                *Vishwanath (Varanasi  Uttar Pradesh), *Trimbakeshwar (Nashik  Maharashtra),
                *Vaidyanath  (Deoghar, Jharkhand), *Aundha Nagnath  (Hingoli, Maharashtra) 
                *Nageshvara (Dwarka Gujarat), *Rameshwar  (Rameshwaram  Tamil Nadu),
                *Grishneshwar  (Verul  Ellora Aurangabad Maharashtra)</p><br />
            <h6 className="font-weight">52 Shakti Peeth</h6>
            {shaktiPeeth.map((shakti, index) => <p style={{marginLeft:"1rem", marginBottom:0.5}} key={index}>{shakti}</p> )}
            <br />
            <table className="table table-striped table-bordered border-secondary">
                <tbody>
                    {krishnaYatra.map((yatra, index) => <tr key={index}><td width={"10%"}>{index + 1}</td> <td width={"75%"}>{yatra.name}</td> <td>{yatra.location}</td></tr> )}
                </tbody>
            </table>
            {pilgrimTours.map((tour, index) => <><h4 key={index}>{tour.name}</h4><p key={index}>{tour.locations}</p></>)}
        </div>
    </>
}