const fs = require('fs');
const path = require('path');

// Blog data to migrate
const blogData = {
  title: 'La Sobreestimulación Digital: Un Desafío para la Salud Mental del Siglo XXI',
  excerpt: 'Exploramos cómo el exceso de contenido digital está afectando nuestra capacidad de concentración, bienestar emocional y relaciones interpersonales.',
  content: `# La Sobreestimulación Digital: Un Desafío para la Salud Mental del Siglo XXI

En la era digital actual, estamos constantemente bombardeados por información, notificaciones y contenido que compite por nuestra atención. Esta sobreestimulación digital se ha convertido en uno de los mayores desafíos para la salud mental contemporánea.

## ¿Qué es la Sobreestimulación Digital?

La sobreestimulación digital se refiere al estado en el que nuestro cerebro recibe más información de la que puede procesar de manera efectiva. Esto incluye:

- **Notificaciones constantes** de redes sociales, emails y aplicaciones
- **Contenido infinito** en plataformas de streaming y redes sociales
- **Multitarea digital** que fragmenta nuestra atención
- **Información contradictoria** que genera confusión y ansiedad

## Impacto en la Salud Mental

### 1. **Déficit de Atención**
La exposición constante a estímulos digitales está reconfigurando nuestros patrones de atención. Según estudios recientes, la capacidad de atención promedio ha disminuido de 12 segundos en 2000 a solo 8 segundos en 2023.

### 2. **Ansiedad y Estrés**
La sobrecarga de información activa constantemente nuestro sistema de respuesta al estrés, manteniendo niveles elevados de cortisol que pueden llevar a:
- Trastornos del sueño
- Irritabilidad
- Dificultades de concentración
- Síntomas de ansiedad generalizada

### 3. **Aislamiento Social**
Paradójicamente, aunque estamos más "conectados" que nunca, muchos reportan sentirse más solos. La interacción digital superficial puede reemplazar conexiones humanas profundas y significativas.

### 4. **Comparación Social**
Las redes sociales exponen constantemente vidas "perfectas" que pueden generar:
- Baja autoestima
- Sentimientos de insuficiencia
- Depresión
- Ansiedad social

## Estrategias para Combatir la Sobreestimulación

### **1. Desintoxicación Digital**
- Establece horarios específicos para revisar redes sociales
- Elimina aplicaciones innecesarias del teléfono
- Practica "días sin pantalla" regularmente

### **2. Mindfulness Digital**
- Practica la atención plena antes de usar dispositivos
- Establece intenciones claras antes de cada sesión digital
- Observa cómo te sientes durante y después del uso

### **3. Crear Rituales Saludables**
- No uses dispositivos en la primera hora del día
- Establece una "hora de desconexión" antes de dormir
- Crea espacios libres de tecnología en tu hogar

### **4. Reemplazar con Actividades Analógicas**
- Lectura de libros físicos
- Ejercicio al aire libre
- Hobbies manuales
- Tiempo de calidad con seres queridos

## El Papel de la Terapia

La sobreestimulación digital puede ser especialmente desafiante para personas con:
- Trastornos de ansiedad
- TDAH
- Depresión
- Trastornos del sueño

La terapia puede ayudar a:
- Identificar patrones problemáticos de uso digital
- Desarrollar estrategias personalizadas de gestión
- Trabajar con emociones subyacentes que llevan al uso excesivo
- Reconstruir relaciones saludables con la tecnología

## Conclusión

La tecnología digital no es inherentemente mala, pero necesitamos aprender a usarla de manera consciente y saludable. Como sociedad, debemos desarrollar una nueva alfabetización digital que incluya el bienestar mental.

La clave está en encontrar el equilibrio: usar la tecnología como herramienta para mejorar nuestras vidas, no como sustituto de experiencias humanas auténticas.

## Referencias y Fuentes

- **"Digital Minimalism"** - Cal Newport (2019)
- **"The Attention Merchants"** - Tim Wu (2016)
- **"Irresistible"** - Adam Alter (2017)
- **Estudios de la Universidad de Stanford** sobre multitarea digital
- **Investigaciones del MIT** sobre impacto de redes sociales en bienestar
- **Reportes de la OMS** sobre salud mental en la era digital

---

*Este artículo es parte de nuestra serie sobre salud mental en la era digital. Si te identificas con estos temas, considera agendar una consulta para explorar cómo podemos trabajar juntos en tu bienestar digital.*`,
  author: 'Dra. Zaira',
  publishedAt: '2024-01-20T10:00:00.000Z',
  readTime: 8,
  tags: ['salud-mental', 'tecnologia', 'ansiedad', 'bienestar', 'terapia'],
  category: 'salud-mental',
  slug: 'sobreestimulacion-digital',
  featuredImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
};

// Create the blog entry in Strapi format
const strapiBlogEntry = {
  data: {
    title: blogData.title,
    excerpt: blogData.excerpt,
    content: blogData.content,
    author: blogData.author,
    publishedAt: blogData.publishedAt,
    readTime: blogData.readTime,
    tags: blogData.tags,
    category: blogData.category,
    slug: blogData.slug,
    featuredImage: blogData.featuredImage,
    publishedAt: new Date().toISOString()
  }
};

// Save to a JSON file for manual import
const outputPath = path.join(__dirname, '..', 'data', 'migrated-blog.json');
fs.writeFileSync(outputPath, JSON.stringify(strapiBlogEntry, null, 2));

console.log('Blog entry migrated successfully!');
console.log('File saved to:', outputPath);
console.log('\nTo import this blog entry:');
console.log('1. Go to your Strapi admin panel');
console.log('2. Navigate to Content Manager > Blog');
console.log('3. Click "Create new entry"');
console.log('4. Copy the data from the generated JSON file');
console.log('5. Save and publish the entry');
