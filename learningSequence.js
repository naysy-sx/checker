// Генерирует последовательность вопросов в формате лесенки
export function generateSequence(totalQuestions) {
  const sequence = [];
  let currentSize = 1;

  while (sequence.length < 20 && currentSize <= totalQuestions) {
    // Добавляем возрастающую последовательность
    for (let i = 1; i <= currentSize; i++) {
      sequence.push(i - 1);
    }
    currentSize++;
  }

  return sequence.slice(0, 20); // Ограничиваем 20 вопросами
}

// Разбивает контент на пары вопрос-ответ
export function parseContent(content) {
  return content
    .split('---')
    .map(block => block.trim())
    .filter(block => block)
    .map(block => {
      const [question, ...answerParts] = block.split('\n');
      return {
        question: question.trim(),
        answer: answerParts.join('\n').trim()
      };
    });
}