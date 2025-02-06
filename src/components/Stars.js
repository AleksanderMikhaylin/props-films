import React from 'react';
import Star from './Star';
import { nanoid } from 'nanoid';

interface StarsProps {
  count: number; // Пропс count должен быть числом
}

const Stars: React.FC<StarsProps> = ({ count }) => {
  // Проверка на допустимое значение count
  if (count < 1 || count > 5) {
    return null;
  }

  // Создание массива звезд
  const stars = Array.from({ length: count }, () => ({
    id: nanoid(),
  }));

  return (
    <ul className="Stars">
      {stars.map((star) => (
        <Star key={star.id} />
      ))}
    </ul>
  );
};

// Значение по умолчанию для пропса count
Stars.defaultProps = {
  count: 0,
};

export default Stars;
