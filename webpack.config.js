plugins: [
    //...
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'assets'), to: path.resolve(__dirname, 'build', 'assets') },
      ],
    })
  ],