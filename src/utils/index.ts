/**
 * 寻找到小程序页面的第一个子节点
 * @param node 
 */
export function findPageNode(node: any) {
  if(node.pendingProps.tid) {
    return node;
  }
  return findPageNode(node._debugOwner);
}