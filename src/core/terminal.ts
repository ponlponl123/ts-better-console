function getProcessSize() {
  const { stdout } = process;
  return {
    width: stdout.columns,
    height: stdout.rows,
  };
}

export { getProcessSize };
