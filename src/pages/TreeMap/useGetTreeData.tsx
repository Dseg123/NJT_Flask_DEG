import React, { useState, useEffect } from 'react';
import { TreeData } from './treeData';
import { fetchTreeData } from '../../config/tree';

const useGetTreeData = (): TreeData[] => {
  const [treeData, setTreeData] = useState<TreeData[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchTreeData();
      console.log('fetched!!!!!');
      setTreeData(data);
    };

    fetch();
  }, []);

  return treeData;
};

export default useGetTreeData;
