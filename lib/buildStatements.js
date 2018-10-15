'use babel';

export default function buildStatements(statements, context) {
  return Object.entries(statements).reduce((builtStatements, [k, v]) => {
    if (typeof v === 'string')
      return [
        ...builtStatements,
        { operators: [], operands: [k], results: [v], context },
      ];
    else if (Array.isArray(v))
      return [
        ...builtStatements,
        { operators: [], operands: [k], results: v, context },
      ];
    else if (/^[A-Z]/.test(k))
      return [
        ...builtStatements,
        ...Object.entries(v).reduce(
          (acc, [newContext, result]) => [
            ...acc,
            ...buildStatements(
              { [k]: result },
              newContext === 'default' ? context : newContext,
            ),
          ],
          [],
        ),
      ];
    else {
      return [
        ...builtStatements,
        ...buildStatements(v, context).map(builtStatements => ({
          ...builtStatements,
          operators: [k, ...builtStatements.operators],
        })),
      ];
    }
  }, []);
}
