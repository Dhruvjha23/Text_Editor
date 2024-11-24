
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const charCount = document.getElementById('charCount');
    const readingTime = document.getElementById('readingTime');

    textInput.addEventListener('input', updateStats);

    function updateStats() {
      const text = textInput.value;
      const words = text.trim().split(/\s+/).filter(Boolean).length;
      const chars = text.length;
      const time = Math.ceil(words / 200 * 60); // Assuming 200 WPM reading speed

      wordCount.textContent = words;
      charCount.textContent = chars;
      readingTime.textContent = time;
    }

    function convertToCamelCase() {
      const text = textInput.value;
      const camelCase = text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());
      textInput.value = camelCase;
      updateStats();
    }

    function convertToSnakeCase() {
      const text = textInput.value;
      const snakeCase = text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, '_');
      textInput.value = snakeCase;
      updateStats();
    }

    function convertToPascalCase() {
      const text = textInput.value;
      const pascalCase = text
        .replace(/[^a-zA-Z0-9]+(.)?/g, (match, char) => char ? char.toUpperCase() : '')
        .replace(/^./, (match) => match.toUpperCase());
      textInput.value = pascalCase;
      updateStats();
    }

    function boldText() {
      textInput.style.fontWeight = textInput.style.fontWeight === 'bold' ? 'normal' : 'bold';
    }

    function italicText() {
      textInput.style.fontStyle = textInput.style.fontStyle === 'italic' ? 'normal' : 'italic';
    }

    function underlineText() {
      textInput.style.textDecoration = textInput.style.textDecoration === 'underline' ? 'none' : 'underline';
    }

    function clearFormatting() {
      textInput.style.fontWeight = 'normal';
      textInput.style.fontStyle = 'normal';
      textInput.style.textDecoration = 'none';
    }