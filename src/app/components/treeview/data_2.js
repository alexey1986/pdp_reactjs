export const tree = {
    root: {
      id: 'root',
      children: [
        'id1',
        'id2',
      ],
    },
    byId: {
      id1: {
        id: 'id1',
        name: 'Folder 1',
        type: 'folder',
        description: 'This is a folder 1',
        children: [
          'id3',
        ],
      },
      id2: {
        id: 'id2',
        name: 'Folder 2',
        type: 'folder',
        description: 'This is a folder 2',
        children: [],
      },
      id3: {
        id: 'id3',
        name: 'File 1',
        type: 'file',
        description: 'Thisi s a file 1'
      }
    },
    allIds: ['root', 'id1', 'id2', 'id3']  
}