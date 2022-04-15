# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Review.destroy_all
CartItem.destroy_all
User.destroy_all
Tea.destroy_all

# USERS

demo_user = User.create!(
  first_name: "Demo",
  last_name: "User",
  email: "demouser@demo.com",
  password: "password"
)

test_user = User.create!(
  first_name: "Test",
  last_name: "Tester",
  email: "test@test.com",
  password: "testing"
)

# TEAS

catalina_mint = Tea.create!(
  name: "Catalina Mint",
  category: "Herbal",
  description: "It's a blend we believe Catalina, from the famous movie Catalina La Grande, would have loved. A timeless classic mint tea refined to perfection. A single brew of Catalina Mint delivers a pure and refreshing taste that is shown to rejuvenate the body with benefits including easing digestion, relieving migraines, and improving the quality of one’s sleep. Whether brewed as a soothing mug of hot tea or incorporated into a chilled glass of mint tea lemonade, Catalina Mint is the tea that goes with everything.",
  price: 15,
  size: "S",
  image: "images/catalinamint.png"
)
#file1 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/catalinamint.png")
#catalina_mint.photo.attach(io: file1, filename: "catalinamint.png")

chrysanthemum = Tea.create!(
  name: "Chrysanthemum",
  category: "Herbal",
  description: "A flower bulb as big and bright as the Chrysanthemum (Ju-Hua) brews a tea of equal luxury and majesty. Once cultivated exclusively for the Emperor of China during the Ming Dynasty, this rare flower is known as, “Emperor’s Yellow Chrysanthemum”. Grown in in the Huang Shan (Yellow Mountain) area of the Anhui Province of China, our Chrysanthemum tea’s elite status is matched by its luxurious flavor as well: smooth, soothing, cooling, floral, and rich with a hint of mint. Deserving of its reputation as one of China’s most popular herbal teas, our Chrysanthemum tea imparts the refined taste of nobility.",
  price: 15,
  size: "S",
  image: "images/chrysanthemum.png"
)
#file2 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/chrysanthemum.png")
#chrysanthemum.photo.attach(io: file2, filename: "chrysanthemum.png")

cloud_mist = Tea.create!(
  name: "Cloud Mist",
  category: "Green",
  description: "Cloud Mist tea gains its name from the origins of its cultivation, being harvested from the Le Mountains in China. At an altitude so high that the clouds constantly cover the mountainside with a body of mist above the surface. Infused with flavor from this mystical environment, this tea is among the rarest teas to be cultivated, yet its tiny leaves provide one of the finest and most clean taste of a classic Chinese green tea renowned for its cool taste and attractive smell. In the Tang Dynasty, Chinese great tea master Lu Yu even remarked upon the reputation of Cloud Mist tea leaves in his famous work, “The Classic of Tea”; now you can enjoy these legendary tea leaves.",
  price: 15,
  size: "S",
  image: "images/cloudmist.png"
)
#file3 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/cloudmist.png")
#cloud_mist.photo.attach(io: file3, filename: "cloudmist.png")

darjeeling = Tea.create!(
  name: "Darjeeling TGBOP",
  category: "Black",
  description: "Grown in the world-renown Darjeeling District of West Bengal, India, Darjeeling TGBOP (Tippy Golden Broken Orange Pekoe) is a grade of black tea that is among the most sought after and consumed in the world. Our Darjeeling tea leaves were chosen for their excellent body and flavor, retaining the full body and dark color of this rich black tea with the slight yet musky spiciness. These tea leaves are a treasure for those seeking modestly priced Darjeeling teas with excellent flavor.",
  price: 15,
  size: "S",
  image: "images/darjeelingtgbop.png"
)
#file4 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/darjeelingtgbop.png")
#darjeeling.photo.attach(io: file4, filename: "darjeelingtgbop.png")

dragonwell = Tea.create!(
  name: "Dragonwell",
  category: "Green",
  description: "Dragonwell Tea, translated from the Chinese term “Longjing Tea”, is considered one of China’s most famous green teas. Grown in the city of Hang Zhou in the Zheijiang province of China, this tea is harvested and dried using a process of pan-firing, where artisans dry the leaves over a series of massive cast-iron pans using techniques that have been perfected by tea masters over centuries of practice. Our variety of Dragonwell tea leaves use the best Dragonwell leaves available in order to deliver a cup of green tea with the smoothest texture, roundest flavor, and the fullest accent of nutty and buttery flavor. A staple for Chinese tea drinkers for centuries, now available for you at home.",
  price: 15,
  size: "S",
  image: "images/dragonwell.png"
)
#file5 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/dragonwell.png")
#dragonwell.photo.attach(io: file5, filename: "dragonwell.png")

earl_grey = Tea.create!(
  name: "Earl Grey",
  category: "Black",
  description: "An all-time favorite for tea drinkers worldwide, our Earl Grey tea blend offers the finest China and Ceylon Orange Pekoe black tea leaves. This quintessential British flavored tea type was named after Charles Grey, the 2nd Earl of Grey and Prime Minister of the United Kingdom in the 19th century, who popularized the flavor when an English tea master combined his black tea with bergamot oil at his behest, thus inventing one of the most popular types of flavored tea in the world. Our Earl Grey tea blend seeks to capture the same sense of nobility and luxury by using the finest black tea leaves sourced from the finest black tea cultivators in China and Sri Lanka, and infusing it with equally refined Bergamot oil. A cup of our Earl Grey tea delivers the rich flavor of black tea infused with floral notes and the unique, citrus aroma of bergamot root, and it is sure to be an instant classic.",
  price: 15,
  size: "S",
  image: "images/earlgrey.png"
)
#file6 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/earlgrey.png")
#earl_grey.photo.attach(io: file6, filename: "earlgrey.png")

elderflower = Tea.create!(
  name: "Elderflower",
  category: "Herbal",
  description: "Described as, “a cup of summertime”, Elderflower uses the blossoms from the European Elder tree for a delightful tea variety. Light in color and texture, the taste of Elderflower tea is remarkable for its crisp, clean, and subtle floral notes. Once used as a remedy in German folk medicine, this antioxidant-rich flower helps accelerate healing, soothes the skin, and prevents premature aging.",
  price: 15,
  size: "S",
  image: "images/elderflower.png"
)
#file7 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/elderflower.png")
#elderflower.photo.attach(io: file7, filename: "elderflower.png")

ginger_rogers = Tea.create!(
  name: "Ginger Rogers",
  category: "Herbal",
  description: "A tea as smooth on the palette as it is on the dance floor. Named after the famed actress and dancer, our Ginger Rogers tea blend combines our herbal tea leaves with a lively combination of lemongrass and dried ginger. With that jazzy fusion of soothing herbs, zesty lemongrass, and spicy ginger, this antioxidant-rich remedy will have you tapping your feet with joy.",
  price: 15,
  size: "S",
  image: "images/gingerrogers.png"
)
#file8 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/gingerrogers.png")
#ginger_rogers.photo.attach(io: file8, filename: "gingerrogers.png")

ginger_tango = Tea.create!(
  name: "Ginger Tango",
  category: "Herbal",
  description: "The embodiment passion and exhilaration, Ginger Tango is an original tea of unforgettable blend of herbs and spices. From the first sip of this herbal tea, a provocative rush of flavors will dance across the palette: savory hibiscus, rich schizandra berries, deep licorice root, tangy rosehips, and sweet orange peel. With each ingredient synchronized to arrive at just the right time, Ginger Tango this original herbal tea blend will captivate with every cup.",
  price: 15,
  size: "S",
  image: "images/gingertango.png"
)
#file9 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/gingertango.png")
#ginger_tango.photo.attach(io: file9, filename: "gingertango.png")

geisha_memoirs = Tea.create!(
  name: "Geisha Memoirs",
  category: "Green",
  description: "A tea that possesses the true elegance of a Geiko (Geisha). Using an expertly blended combination of green tea from China and Japan, this green tea blend uses its ingredients to represent the lives of these classic Japanese women: ginseng leaves to beguile the senses, lemongrass to add a zest of excitement, and popped brown rice for a climactic and satisfying surprise. A refined medley of flavors and textures that is sure to entice and entertain.",
  price: 15,
  size: "S",
  image: "images/geishamemoirs.png"
)
#file10 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/geishamemoirs.png")
#geisha_memoirs.photo.attach(io: file10, filename: "geishamemoirs.png")

genmai_cha = Tea.create!(
  name: "Genmai Cha",
  category: "Green",
  description: "A classic Japanese green tea blend, Genmai Cha is commonly known as, “popcorn tea” due to grains of popped rice incorporated into the blend during the roasting process. Using the popular Japanese Sencha variety of green tea leaves along with fire-toasted popped rice, a cup of Genmai Cha delivers a hearty flavor that fills the mouth with a rich green tea flavor along with the warm, nutty undertones. A very versatile tea variety for those seeking a full-bodied flavor, ideally to complement an equally hearty meal.",
  price: 15,
  size: "S",
  image: "images/genmaicha.png"
)
#file11 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/genmaicha.png")
#genmai_cha.photo.attach(io: file11, filename: "genmaicha.png")

gone_with_the_wind = Tea.create!(
  name: "Gone With the Wind",
  category: "Green",
  description: "No need for sweeteners with sipping from a cup of Gone with the Wind. This green tea blend incorporates our highest grade green tea leaves with the full-bodied fruit flavor of passion fruit, fusing the two together as closely as Scarlet O’Hara and Rhett Butler. With subtle yet distinctive tones of green tea matched by the rich fruit flavor of passion fruit, Gone with the Wind is as classic of a tea blend as its namesake. As God is your witness, you’ll never go thirty again!",
  price: 15,
  size: "S",
  image: "images/gonewiththewind.png"
)
#file12 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/gonewiththewind.png")
#gone_with_the_wind.photo.attach(io: file12, filename: "gonewiththewind.png")

greys_kelly = Tea.create!(
  name: "Grey's Kelly",
  category: "Black",
  description: "Combining the soft, floral aroma of lavender with the full-bodied flavor of Earl Grey, Grey’s Kelly is an original blend of these complementary flavors. With the first sip from a warm cup, the sweet and citrus flavor of Earl Grey will sit heavy on the palette while notes of lavender accent the experience. An excellent blend for fans of Earl Grey who are looking for the perfect complement in their favorite tea, look no further than the lavender-laced Grey’s Kelly.",
  price: 15,
  size: "S",
  image: "images/greyskelly.png"
)
#file13 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/greyskelly.png")
#greys_kelly.photo.attach(io: file13, filename: "greyskelly.png")

hibiscus = Tea.create!(
  name: "Hibiscus",
  category: "Herbal",
  description: "Distinctive for its vibrant red color and lively fragrance, Hibiscus is a classic herbal tea with a variety of health benefits. Commonly used around the world as a remedy for various ailments, hibiscus tea is proven to control cholesterol levels, lower blood pressure, and managing body weight. The bright red flower is thus a choice pick for health-conscious tea drinkers who are looking for a tea that is equal parts sweet, tart, refreshing, and healthy. Best served warm or iced.",
  price: 15,
  size: "S",
  image: "images/hibiscus.png"
)
#file14 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/hibiscus.png")
#hibiscus.photo.attach(io: file14, filename: "hibiscus.png")

irish_breakfast = Tea.create!(
  name: "Irish Breakfast",
  category: "Black",
  description: "Stronger than an English Breakfast, the Irish Breakfast is the tea for those whose palette enjoys the heartiest of black teas. By combining the two strongest varieties of tea leaves, Indian Assam and Sri Lankan Ceylon black tea leaves, this satisfying blend has a heavy body, a powerful aroma, and a caffeine content to boot. Perhaps considered to be the espresso of teas, Irish Breakfast is the prime choice for those who desire boldness from their blends.",
  price: 15,
  size: "S",
  image: "images/irishbreakfast.png"
)
#file15 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/irishbreakfast.png")
#irish_breakfast.photo.attach(io: file15, filename: "irishbreakfast.png")

jasmine_fancy = Tea.create!(
  name: "Jasmine Fancy",
  category: "Green",
  description: "Expertly brought to life by centuries of proud tradition surrounding Jasmine teas, this fragrant flower has been methodically cultivated for the pleasure of those seeking a respite from the tensions of the modern day. Entrancing the soul with the scent of green tea, this treat captivates the senses in a flowery aroma, before softly immersing them in the subtle sweet taste of Jasmine; promising its captive audience a soothing moment of relaxation, before providing just enough of a gentle kick to inspire them to face the rest of their day. For such a combination of the ideal and the practical, this seemingly modest blessing is the perfect midday relief to reinvigorate the spirit, and is certain to claim your fancy.",
  price: 15,
  size: "S",
  image: "images/jasminefancy.png"
)
#file16 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/jasminefancy.png")
#jasmine_fancy.photo.attach(io: file16, filename: "jasminefancy.png")

josephine_baker = Tea.create!(
  name: "Josephine Baker",
  category: "Green",
  description: "An exceptionally fruity green tea, offering a delicious and spiritually uplifting beverage. Named for the famous American-born French entertainer, civil rights activist and French Resistance agent of World War II, this delightful blend emulates her vigor and the inspiration she brought to the captivated world of the 20th Century. Replete with antioxidants, this tea boasts an array of health benefits, promising to aid the body just as well as the mind.",
  price: 15,
  size: "S",
  image: "images/josephinebaker.png"
)
#file17 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/josephinebaker.png")
#josephine_baker.photo.attach(io: file17, filename: "josephinebaker.png")

kisses = Tea.create!(
  name: "Kisses",
  category: "Black",
  description: "A smooth and flavorful mixture of Chinese black tea, curated to bless your day with a gentle kiss sealed in the taste of chocolate. This exquisite and affectionate brew is flavored with the timeless tones of romance imbued within rose petals, and the sweet taste gleaned from cacao nibs – chocolate in its purest form, used to make a beverage that already caresses the heart all the more alluring. Whether for enjoyment alone or with a loved one, Kisses imparts an intimate feeling to the soul, and can warm even the loneliest of evenings.",
  price: 15,
  size: "S",
  image: "images/kisses.png"
)
#file18 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/kisses.png")
#kisses.photo.attach(io: file18, filename: "kisses.png")

lapsang_souchong = Tea.create!(
  name: "Lapsang Souchong",
  category: "Black",
  description: "A storied and cherished favorite throughout the centuries, Lapsang Souchong is vaunted as the first black tea in history, dating its origins back to China under the Qing Dynasty. Originating from the Wuyi region, the leaves are imbued with their unmistakably unique and provocative taste through pinewood smoke – a modest process once used to speed up production, without yet realizing the treasure they had created. Through successive eras of Chinese history, this tea has persevered, and has been enjoyed around the world by many from all walks of life; finding its way from the tables of such esteemed individuals as Sir Winston Churchill, and now to your own cup.",
  price: 15,
  size: "S",
  image: "images/lapsang.png"
)
#file19 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/lapsangsouchong.png")
#lapsang_souchong.photo.attach(io: file19, filename: "lapsangsouchong.png")

mandarin_green = Tea.create!(
  name: "Mandarin Green",
  category: "Green",
  description: "A mild-mannered brew, bringing the Japanese breed of green tea together with Chinese methods of preparation. These Japanese style Sencha leaves have been pan-fired, mixed with beautiful safflower blossoms to enhance its floral scent, and further imbued with the juicy taste of blood oranges – creating a concealed treat for the unexpecting, yet preserving the mellow taste of its body. A cross-cultural exchange in green tea preparation, this deftly crafted tea promises an invigorating cup to any curious enough to experience it.",
  price: 15,
  size: "S",
  image: "images/mandaringreen.png"
)
#file20 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/mandaringreen.png")
#mandarin_green.photo.attach(io: file20, filename: "mandaringreen.png")

mumbai_chai = Tea.create!(
  name: "Mumbai Chai",
  category: "Black",
  description: "An exotic taste of the finest spices cultivated in India, brought together for you to enjoy in a single cup of black tea. Highly coveted cardamom spices and black peppers from Kerala intermingle with cloves and ginger, migrated from the isles of Southeast Asia, to provide a melange of spicy sensations that bring the thrill of Indian cuisine to life. All this tied together by a dash of cinnamon, and it creates a cup of fierce, but gentle exhilaration for those who relish a taste of what made the spice trade of antiquity so wealthy.",
  price: 15,
  size: "S",
  image: "images/mumbaichai.png"
)
#file21 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/mumbaichai.png")
#mumbai_chai.photo.attach(io: file21, filename: "mumbaichai.png")

peaches = Tea.create!(
  name: "Peaches",
  category: "Black",
  description: "A truly unique blend, for those who can’t resist the invigorating taste of a ripe peach. Traditional Chinese black tea, mixed with Ceylon Orange Pekoe and made unforgettable through the addition of luscious peaches, giving your cup that enrapturing taste you can’t get enough of. Blessed with the mellow aura of fragrant peach blossoms, and subtly spiced by a sliver of ginger to punctuate the tropical sensations.",
  price: 15,
  size: "S",
  image: "images/peaches.png"
)
#file22 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/peaches.png")
#peaches.photo.attach(io: file22, filename: "peaches.png")

peppermint_chamomile = Tea.create!(
  name: "Peppermint Chamomile",
  category: "Herbal",
  description: "A minty herbal tea, putting a refreshing spin on classic chamomile. Made with the finest Egyptian chamomile buds, this herbal blend has been invigorated with crisp peppermint leaves, creating a surprisingly calming brew that leaves one feeling cleansed. Ideal for relaxation, this mint chamomile is just the right balance between excitement and a soothing calm to wind down in the evening.",
  price: 15,
  size: "S",
  image: "images/peppermint.png"
)
#file23 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/peppermintchamomile.png")
#peppermint_chamomile.photo.attach(io: file23, filename: "peppermintchamomile.png")

rose = Tea.create!(
  name: "Rose",
  category: "Herbal",
  description: "A gentle classic for those who favor a subtle, refined taste that doesn’t need to be overwhelmed by other ingredients to make its worth apparent to civilization. This simple, yet flavorful cup makes expert use of rose petals to gift you with a soft accent to your herbal tea – conveying the pleasantly light, yet delightful taste inherent in rose teas. For those who fancy a cup that doesn’t overwhelm its most important assets, this mild-mannered and sophisticated flower might just be the answer you’ve been looking for.",
  price: 15,
  size: "S",
  image: "images/rose.png"
)
#file24 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/rose.png")
#rose.photo.attach(io: file24, filename: "rose.png")

sencha = Tea.create!(
  name: "Sencha",
  category: "Green",
  description: "The resolute benchmark of traditional green teas in Japanese culture, and a sensible classic that boasts well deserved popularity around the world. Abstained from fermentation and pan-fired, the leaves are quick and easy to prepare, and are a capable cure for anxiety and high blood pressure. With a bright, crisp taste that soothes the mind, this refreshing choice makes for a both practical, and ideal cup.",
  price: 15,
  size: "S",
  image: "images/sencha.png"
)
#file25 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/sencha.png")
#sencha.photo.attach(io: file25, filename: "sencha.png")

vanilla_bean = Tea.create!(
  name: "Vanilla Bean",
  category: "Black",
  description: "For those who relish in the sweet and ravishing taste of vanilla, here is our ode to you. Enjoy the finest of black tea, mixed with expertly curated Ceylon Orange Pekoe from Sri Lanka, and topped with a silvery crown of pure, creamy vanilla. With real pieces of vanilla beans to bring that enchanting sweetness to the forefront of your cup, this brew makes for a powerfully ambrosial dessert companion.",
  price: 15,
  size: "S",
  image: "images/vanillabean.png"
)
#file26 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/vanillabean.png")
#vanilla_bean.photo.attach(io: file26, filename: "vanillabean.png")

yerba_mate = Tea.create!(
  name: "Yerba Mate",
  category: "Herbal",
  description: "An herbal tea mix, native to and widely enjoyed throughout southern South America. This unique and popular tea stands proudly on its own in the family, being exceptionally rich with nutrients and sporting a savory grassy taste. Though entirely free of caffeine, it has been known to have a similar, but gentler effect in reinvigorating the body, just as well as the soul. In South American cultures, it is traditionally drank from a gourd through a silver straw called a bombilla, which is commonly passed between friends and family in a show of communal spirit.",
  price: 15,
  size: "S",
  image: "images/yerbamate.png"
)
#file27 = open("https://looseleaf-tea-seeds.s3.us-west-1.amazonaws.com/yerbamate.png")
#yerba_mate.photo.attach(io: file27, filename: "yerbamate.png")