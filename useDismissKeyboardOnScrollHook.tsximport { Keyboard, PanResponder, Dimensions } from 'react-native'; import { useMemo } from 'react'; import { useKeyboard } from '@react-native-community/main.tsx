const TestMessage = () => { 
  const keyboardDismissHandlers = useDismissKeyboardOnScroll();

  return (
    <View style={{ flex: 1 }}>
      <Animated.View { ...keyboardDismissHandlers }>
        <MessageHistory />
        <MessageInput />
      </Animated.View>
    </View>
  );
}
