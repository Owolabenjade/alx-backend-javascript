/**
 * Functions that queue guardrail and math handling processes
 */
export default function guardrail(mathFunction) {
    const queue = [];
    
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      queue.push(String(error));
    } finally {
      queue.push('Guardrail was processed');
    }
    
    return queue;
  }