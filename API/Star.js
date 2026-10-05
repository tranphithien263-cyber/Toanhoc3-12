export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const grade = Math.min(
    12,
    Math.max(3, Number(req.query.grade) || 3)
  );

  const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  let question;
  let answer;

  if (grade <= 3) {
    const a = rand(10, 99);
    const b = rand(10, 99);

    question = `${a} + ${b} = ?`;
    answer = a + b;

  } else if (grade <= 5) {
    const a = rand(10, 50);
    const b = rand(2, 20);

    question = `${a} × ${b} = ?`;
    answer = a * b;

  } else if (grade <= 7) {
    const a = rand(2, 20);
    const b = rand(2, 20);

    question = `${a}² + ${b}² = ?`;
    answer = a * a + b * b;

  } else if (grade <= 9) {
    const x = rand(2, 12);
    const b = rand(2, 15);
    const c = x * x + b * x;

    question = `Giải x: x² + ${b}x = ${c}`;
    answer = x;

  } else if (grade <= 11) {
    const x = rand(2, 12);

    question = `f(x) = x² + 2x. Tính f(${x})`;
    answer = x * x + 2 * x;

  } else {
    const x = rand(2, 10);

    question = `Đạo hàm của x² tại x = ${x} bằng ?`;
    answer = 2 * x;
  }

  res.status(200).json({
    ok: true,
    grade,
    question,
    answer
  });
}
