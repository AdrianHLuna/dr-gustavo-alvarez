# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Gustavo Álvarez Velasco — Cirugía Urológica & Urología Oncológica
**Ciudad:** Tuxtla Gutiérrez, Chiapas (Policlínica de Especialidades en Chiapas)
**Especialidad:** Cirugía Urológica, con Alta Especialidad en Urología Oncológica

**Nota de discreción clínica:** la urología trata anatomía genital y urinaria. Todos los prompts de este manual están redactados de forma anatómica/esquemática (diagramas de libro de texto, renders 3D abstractos, o escenas clínicas discretas centradas en manos/instrumental/expresión) — nunca fotografía explícita de genitales. Esto es intencional: mantiene el resultado profesional, evita contenido gráfico y es lo que la mayoría de los generadores de imagen (Gemini, ChatGPT, Midjourney) aceptan sin rechazo.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/...jpg`), para saber exactamente dónde colocar la imagen generada.

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud y sitios web urológicos de alta gama.
Tono: Preciso, discreto y de autoridad clínica (Cirugía Urológica y Urología Oncológica), sobrio y editorial — nunca explícito ni gráfico.
Estilo: Fotorrealismo y renders 3D de texturas orgánicas médicas estériles para anatomía; fotografía clínica de alta gama para procedimientos y escenas de paciente.
Restricciones: Cero desnudez o anatomía genital explícita — usar diagramas anatómicos esquemáticos tipo libro de texto o encuadres discretos (manos, instrumental, expresión facial) en su lugar. Sin sangre explícita ni contenido gráfico desagradable. Todo debe lucir estéril y de alta tecnología. Prohibidos hologramas, neones, HUDs interactivos o elementos de ciencia ficción. Cero palabras, texto, marcas de agua, firmas o números.
Formato: JPG horizontal de aspecto 16:9 (--ar 16:9 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright luxury medical studio lighting, soft shadows.
- Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Ice Blue (#CCE3F7), Clinical White, Silver, Charcoal Black (#000000).
- Composition: Focused clinical macro or symmetrical editorial view.
- Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style --ar 16:9 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature, blood, explicit nudity, graphic content.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES UROLÓGICAS

### 1. Vejiga Hiperactiva (`public/enfermedades/vejiga-hiperactiva.jpg`)
```text
Aesthetic 3D anatomical illustration of the human bladder wall and detrusor muscle showing subtle involuntary contraction, clean educational cross-section, clinical textbook style.

Lighting: Clean, bright luxury medical studio lighting, soft shadows.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Composition: Symmetrical focused clinical cross-section of the bladder anatomy.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, glowing digital UI, hud, text, words, watermark, signature, blood, nudity.
```

### 2. Pene Escondido (`public/enfermedades/pene-escondido.jpg`)
```text
Aesthetic medical textbook diagram of the male pubic soft tissue and suspensory ligament anatomy, schematic educational illustration showing tissue layers, non-explicit anatomical style.

Lighting: Bright clean laboratory lighting.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Composition: Sagittal schematic anatomical view, textbook diagram framing.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, explicit nudity, graphic content.
```

### 3. Incontinencia Urinaria (`public/enfermedades/incontinencia-urinaria.jpg`)
```text
3D anatomical illustration of the human bladder, urethra and urinary sphincter mechanism, highlighting the sphincter closure function with a subtle glowing blue accent, clean clinical textbook style.

Lighting: Clean, bright luxury medical studio lighting, soft shadows.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Composition: Symmetrical focused clinical view of the lower urinary tract.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, glowing digital UI, hud, text, words, watermark, signature, blood, nudity.
```

### 4. Vejiga Neurogénica (`public/enfermedades/vejiga-neurogenica.jpg`)
```text
Aesthetic 3D medical illustration of the neural pathway connecting the spinal cord to the bladder, showing the nerve-bladder control circuit, clean educational anatomy style.

Lighting: Bright clean laboratory lighting with subtle blue nerve-pathway highlights.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Composition: Vertical anatomical view from lower spine to pelvis.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, glowing digital UI, hud, text, words, watermark, signature, blood, nudity.
```

### 5. Infecciones de Transmisión Sexual (`public/enfermedades/ets-its.jpg`)
```text
Aesthetic 3D medical illustration of the human urogenital tract lining showing localized inflammation, clean educational cross-section, sterile anatomical textbook style, non-explicit.

Lighting: Balanced studio lighting, soft shadows.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Composition: Internal cross-section anatomical view, schematic framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, explicit nudity, graphic content.
```

### 6. Estenosis de Uretra (`public/enfermedades/estenosis-de-uretra.jpg`)
```text
3D anatomical cross-section illustration of the male urethra showing a narrowed segment with scar tissue, clear anatomical contrast, clinical textbook illustration style.

Lighting: Focused clinical spotlighting along the urethral canal.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Composition: Longitudinal cross-section anatomical view.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 7. Cáncer de Próstata (`public/enfermedades/cancer-de-prostata.jpg`)
```text
3D anatomical illustration of the human prostate gland showing a focal lesion within the glandular tissue, sterile organic tissue style, clinical oncology textbook illustration.

Lighting: Focused clinical spotlighting on the prostate gland.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Composition: Close-up sagittal pelvic anatomical view.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 8. Cáncer de Vejiga (`public/enfermedades/cancer-de-vejiga.jpg`)
```text
3D anatomical illustration of the human bladder inner lining (urothelium) showing a localized abnormal tissue growth, sterile organic tissue style, clinical oncology textbook illustration.

Lighting: Bright clean laboratory lighting.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Composition: Internal bladder lumen cross-section view.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 9. Cáncer de Riñón (`public/enfermedades/cancer-de-rinon.jpg`)
```text
3D anatomical cross-section render of the human kidney showing a focal renal mass within the cortex, sterile organic tissue style, clinical oncology textbook illustration.

Lighting: Bright clean studio light with subtle blue accent on the renal cortex.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Composition: Coronal cross-section anatomical view of the kidney.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 10. Cáncer Testicular (`public/enfermedades/cancer-testicular.jpg`)
```text
Aesthetic medical textbook diagram of testicular internal anatomy shown in schematic cross-section, highlighting a focal tissue irregularity, non-explicit educational illustration style.

Lighting: Bright clean laboratory lighting.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Composition: Schematic anatomical cross-section, textbook diagram framing.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, explicit nudity, graphic content.
```

---

## 🏥 SECCIÓN 2: PROMPTS PARA SERVICIOS Y PROCEDIMIENTOS UROLÓGICOS

### 1. Urodinamia (`public/servicios/urodinamia.jpg`)
```text
Clinical photorealistic photo of a urologist reviewing a real-time urodynamic pressure-flow waveform on a high-definition diagnostic monitor, modern outpatient clinic setting.

Lighting: Clean, bright luxury medical studio lighting.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon.
```

### 2. Prótesis de Pene (`public/servicios/protesis-de-pene.jpg`)
```text
3D medical rendering of a flexible penile implant device displayed isolated on a sterile clinical surface, close-up product-style medical device render.

Lighting: Studio spotlighting with soft blue reflections.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Metallic Silver, White.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood, text, watermark, signature, sci-fi, neon, HUD, nudity, anatomy.
```

### 3. Prótesis Testicular (`public/servicios/protesis-testicular.jpg`)
```text
3D medical rendering of a silicone testicular implant device displayed isolated on a sterile clinical surface, close-up product-style medical device render.

Lighting: Studio spotlighting with soft blue reflections.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Metallic Silver, White.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood, text, watermark, signature, sci-fi, neon, HUD, nudity, anatomy.
```

### 4. Esfínter Urinario Artificial (`public/servicios/esfinter-urinario-artificial.jpg`)
```text
3D medical illustration of an artificial urinary sphincter device (cuff, pump and pressure-regulating balloon) shown as an isolated schematic device diagram on an anatomical pelvic model.

Lighting: Clean studio spotlighting, soft blue accents.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood, text, watermark, signature, sci-fi, neon, HUD, nudity.
```

### 5. Mallas Anti-Incontinencia (`public/servicios/mallas-anti-incontinencia.jpg`)
```text
3D medical rendering of a surgical support mesh sling placed on an anatomical pelvic floor model, sterile schematic device illustration.

Lighting: Studio spotlighting with soft blue reflections.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Metallic Silver, White.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood, text, watermark, signature, sci-fi, neon, HUD, nudity.
```

### 6. Radioterapia (`public/servicios/radioterapia.jpg`)
```text
Clinical photorealistic photo of a patient positioned under a modern linear accelerator radiotherapy machine in a high-tech oncology treatment room, medical staff adjusting equipment in the background.

Lighting: Bright clean clinical facility lighting.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon.
```

### 7. Reconstrucción Urinaria (`public/servicios/reconstruccion-urinaria.jpg`)
```text
3D high-precision medical illustration of a reconstructed segment of the urethra with graft tissue integration, sterile anatomical textbook style.

Lighting: Clean studio spotlighting, blue accents.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood, text, watermark, signature, sci-fi, neon, HUD, nudity.
```

### 8. Prostatectomía Radical (`public/servicios/prostatectomia-radical.jpg`)
```text
Clinical photorealistic photograph of a urologic surgeon operating a robotic-assisted surgical console, high-definition monitor displaying a pelvic surgical field, modern operating theater.

Lighting: Bright operating theater lighting.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon.
```

### 9. Nefrectomía (`public/servicios/nefrectomia.jpg`)
```text
Photorealistic clinical image of a surgical team performing a minimally invasive laparoscopic kidney procedure, micro-camera scope and instruments visible, high-definition surgical display in background.

Lighting: Focused hospital surgical light.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon.
```

### 10. Cistectomía Radical (`public/servicios/cistectomia-radical.jpg`)
```text
Clinical photorealistic photograph of a surgical team in a modern operating room during a major urologic oncology procedure, HD anatomical display screen in the background, focused clinical atmosphere.

Lighting: Bright operating theater lighting.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White, Silver.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon.
```

---

## 🩹 SECCIÓN 3: PROMPTS PARA SÍNTOMAS UROLÓGICOS

### 1. Micción Frecuente (`public/sintomas/miccion-frecuente.jpg`)
```text
Photorealistic shot of an adult glancing at their watch while standing near a restroom door in an office setting, subtle expression of mild urgency.

Lighting: Soft natural indoor lighting.
Color Palette: Brand Deep Navy (#00396C) clothing, Brand Vivid Blue (#0072D8) accents, Neutral Gray.
Composition: Medium shot, discreet framing.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity.
```

### 2. Nicturia (`public/sintomas/nicturia.jpg`)
```text
Photorealistic shot of a person sitting up on the edge of their bed at night, visibly groggy, glancing at a nightstand clock showing a late hour, one hand reaching for slippers as if about to get up to use the bathroom, soft bedside lamp light, quiet bedroom environment.

Lighting: Soft night ambient lamp lighting.
Color Palette: Brand Deep Navy (#00396C) bed linens, Brand Vivid Blue (#0072D8) accents, Cream.
Composition: Medium shot centered on the seated figure and the nightstand clock.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity.
```

### 3. Dificultad para Lograr una Erección (`public/sintomas/dificultad-para-lograr-una-ereccion.jpg`)
```text
Photorealistic shot of a mature man sitting alone on the edge of the bed at night, elbows on knees, head slightly lowered in a pensive and frustrated expression, out-of-focus partner sleeping peacefully in the background, dim bedroom lighting conveying emotional weight and isolation — must NOT look happy, affectionate or content.

Lighting: Low warm bedside lamp light, soft shadows, night atmosphere.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8) subtle accents, Warm Charcoal.
Composition: Medium shot from the side, seated figure framed against the dim room.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, explicit content, smiling, happy couple, affectionate, romantic.
```

### 4. Enrojecimiento del Prepucio o del Pene (`public/sintomas/enrojecimiento-del-prepucio.jpg`)
```text
Photorealistic shot of a person sitting on the edge of the bed getting dressed in the morning, pausing mid-motion while adjusting their waistband with a subtle wince of discomfort, implying they just felt irritation, tasteful and discreet framing from the waist up only.

Lighting: Soft warm morning daylight.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8) accents, Warm Beige.
Composition: Medium shot from the waist up, seated figure, no explicit body area visible.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, graphic content, exposed skin below waist.
```

### 5. Erupciones en la Punta del Pene (`public/sintomas/erupciones-en-la-punta-del-pene.jpg`)
```text
Photorealistic shot of a person standing in the bathroom wrapped in a towel after a shower, pausing to look down with a puzzled, concerned expression as if just noticing something unusual on their skin, tasteful framing from the chest up only.

Lighting: Bright clean bathroom lighting, soft steam in the air.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8) towel accent, Clinical White.
Composition: Medium shot from the chest up, no explicit body area visible.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, graphic content, exposed skin below waist.
```

### 6. Secreción con Olor Fétido (`public/sintomas/secrecion-con-olor-fetido.jpg`)
```text
Photorealistic shot of a person holding a piece of clothing over a laundry hamper, pausing with a slight grimace and wrinkled nose as if noticing an unusual, unpleasant odor, discreet and tasteful home setting.

Lighting: Soft natural indoor daylight.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8) hamper accent, Clinical White.
Composition: Medium shot, focused on facial expression and the clothing in hand.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, graphic content.
```

### 7. Dolor o Ardor al Orinar (`public/sintomas/dolor-o-ardor-al-orinar.jpg`)
```text
Photorealistic close-up photo of an adult holding their lower abdomen with a subtle expression of discomfort, standing in a bright modern bathroom.

Lighting: Bright clean indoor lighting.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8) towel accents, Clinical White.
Composition: Medium shot, hand on lower abdomen.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, blood.
```

### 8. Necesidad de Orinar pero Imposibilidad de Hacerlo (`public/sintomas/necesidad-de-orinar-sin-poder-hacerlo.jpg`)
```text
Photorealistic photo of a person sitting tensely on the edge of a chair, both hands pressed against their lower abdomen with visible discomfort, home environment.

Lighting: Soft ambient indoor lighting.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Warm Gray.
Composition: Medium shot focused on posture and hands.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, blood.
```

### 9. Sangre en la Orina (`public/sintomas/sangre-en-la-orina.jpg`)
```text
Photorealistic photo of a concerned adult standing at the bathroom sink, pausing while washing their hands and looking up with a worried, startled expression at their own reflection in the mirror, toilet visible out of focus in the background implying they just noticed something alarming — no explicit depiction of bodily fluids, toilet bowl contents, or blood.

Lighting: Bright clean bathroom lighting.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8), Clinical White.
Composition: Medium shot at the sink, focused on the worried reflection in the mirror.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: red blood, cartoon, text, watermark, signature, CGI, nudity, graphic content, toilet bowl contents.
```

### 10. Infecciones Urinarias Recurrentes (`public/sintomas/infecciones-urinarias-recurrentes.jpg`)
```text
Photorealistic photo of a person drinking a glass of water at a kitchen table while gently pressing a hand to their lower back, calm home environment.

Lighting: Warm natural daylight.
Color Palette: Brand Deep Navy (#00396C), Brand Vivid Blue (#0072D8) glass accents, Soft White.
Composition: Medium shot over kitchen table perspective.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, blood.
```
