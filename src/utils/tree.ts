type TreeOptions = Partial<{
  children: string;
  key: string;
  parent: string;
}>;

/** 将列表转换为树形结构 */
export const list2tree = <T extends Recordable, P = GenericScalar>(
  list: T[],
  parentKey?: P,
  options?: TreeOptions,
) => {
  const {
    children = "children",
    key = "id",
    parent = "parentId",
  } = options ?? {};

  const tree: T[] = [];

  list.forEach((item) => {
    if (item[parent] !== parentKey) return;

    const child = list2tree(list, item[key], options);

    if (child.length) {
      tree.push({ ...item, [children]: child });
    } else {
      tree.push(item);
    }
  });

  return tree;
};
