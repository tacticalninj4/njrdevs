---
title: "Simple Chat UI Package for Flutter"
summary: "Docs for simple_chat_ui, a Flutter package of ready-made chat bubbles and message widgets."
date: 2023-08-27T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["Flutter", "Chat UI", "Mobile Development", "Flutter Widgets", "Flutter Package", "Simple Chat UI", "Message Display", "Chat Application", "Flutter Library", "Custom Chat Widgets", "Image Messages", "Custom Content", "Flutter Installation", "App Development", "UI Components", "Dart"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "About Simple Chat UI Package"
disableHLJS: true # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: false
# cover:
# image: "<image path/url>" # image path/url
# alt: "<alt text>" # alt text
# caption: "<text>" # display caption under cover
# relative: false # when using page bundles set this to true
# hidden: true # only hide on current single page
---
## Simple Chat UI Documentation

[GitHub](https://github.com/tacticalninj4/simple_chat_ui)

### Introduction

The `simple_chat_ui` library is a Flutter package that provides a collection of widgets to help you create a chat user interface for your mobile application. This library allows you to easily display text messages, images, and custom content in a chat-like format.

The library is intended to simplify the process of creating chat interfaces by providing pre-designed components for messages and chat bubbles. You can use these components to build chat interfaces quickly and efficiently.

### Installation

To use the `simple_chat_ui` library in your Flutter project, you need to add it to your `pubspec.yaml` file. Open the `pubspec.yaml` file and add the following line under the `dependencies` section:

```yaml
dependencies:
 simple_chat_ui:
 git:
 url: https://github.com/tacticalninj4/simple_chat_ui.git
```

Then, run `flutter pub get` to fetch and install the package.

### Usage

#### Import the Library

To use the `simple_chat_ui` library in your Dart file, import it as follows:

```dart
import 'package:simple_chat_ui/simple_chat_ui.dart';
```

#### Widgets

##### `SimpleChatUI.message`

This widget is used to display chat messages, including text and images, in a chat-like format. It provides options to display the sender's avatar, message content, and a timestamp.

**Parameters:**

- `message` (String?): The message text to display. Set to `null` if you want to display an image instead.
- `image` (Image?): An optional image widget to display instead of a text message. Set to `null` if you want to display a text message.
- `avatar` (CircleAvatar?): The sender's avatar.
- `onImageTap` (GestureTapCallback?): A callback function to execute when the image is tapped.
- `width` (double): The maximum width of the chat bubble.
- `time` (DateTime): The timestamp of the message.
- `senderID` (String): The unique identifier of the sender.
- `isMe` (bool): Set to `true` if the message is sent by the current user, `false` otherwise.
- `displayName` (String): The display name of the sender.
- `isContinue` (bool): Set to `true` if the message continues from the previous one in the same chat, `false` if it's a new message.

##### `SimpleChatUI.custom`

This widget is used to display custom content in a chat-like format. It provides options to display the sender's avatar, custom content, and a timestamp.

**Parameters:**

- `avatar` (CircleAvatar?): The sender's avatar.
- `width` (double): The maximum width of the chat bubble.
- `body` (Widget): The custom content to display.
- `time` (DateTime): The timestamp of the message.
- `senderID` (String): The unique identifier of the sender.
- `isMe` (bool): Set to `true` if the message is sent by the current user, `false` otherwise.
- `displayName` (String): The display name of the sender.
- `isContinue` (bool): Set to `true` if the message continues from the previous one in the same chat, `false` if it's a new message.

#### Example

Here's an example of how to use the `SimpleChatUI` widgets in a Flutter application:

```dart
import 'package:flutter/material.dart';
import 'package:simple_chat_ui/simple_chat_ui.dart';

void main() {
 runApp(MyApp());
}

class MyApp extends StatelessWidget {
 @override
 Widget build(BuildContext context) {
 return MaterialApp(
 home: Scaffold(
 appBar: AppBar(
 title: Text('Simple Chat UI Example'),
 ),
 body: ChatScreen(),
 ),
 );
 }
}

class ChatScreen extends StatelessWidget {
 @override
 Widget build(BuildContext context) {
 return ListView(
 children: [
 SimpleChatUI.message(
 message: 'Hello, how are you?',
 width: MediaQuery.sizeOf(context).width * (2 / 3),
 time: DateTime.now(),
 senderID: 'user123',
 isMe: true,
 displayName: 'User',
 isContinue: false,
 ),
 SimpleChatUI.message(
 image: Image.network('https://example.com/image.jpg'),
 width: MediaQuery.sizeOf(context).width * (2 / 3),
 time: DateTime.now(),
 senderID: 'user123',
 isMe: false,
 displayName: 'Other User',
 isContinue: true,
 ),
 SimpleChatUI.custom(
 avatar: CircleAvatar(
 backgroundImage: AssetImage('assets/avatar.jpg'),
 ),
 width: MediaQuery.sizeOf(context).width * (2 / 3),
 body: Text('This is a custom message.'),
 time: DateTime.now(),
 senderID: 'user123',
 isMe: true,
 displayName: 'User',
 isContinue: false,
 ),
 ],
 );
 }
}
```

This example demonstrates how to use the `SimpleChatUI` widgets to create a chat interface with text messages, images, and custom content.

### Conclusion

The `simple_chat_ui` library simplifies the process of creating chat interfaces in Flutter applications. You can use the provided widgets to display messages, images, and custom content in a chat-like format, saving you time and effort in UI development.
