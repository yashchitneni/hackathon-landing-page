// SimpleFormAnimation.jsx
// After Effects Script for Form Animation
// To use: In After Effects, go to File > Scripts > Run Script File and select this file

(function() {
  // Check if a project is open
  if (!app.project) {
    alert("Please open a project first!");
    return;
  }

  app.beginUndoGroup("Create Simple Form Animation");

  // Create a new composition
  var compName = "Form Animation";
  var compWidth = 1920;
  var compHeight = 1080;
  var compDuration = 15; // 15 seconds
  var compFrameRate = 30;
  
  var myComp = app.project.items.addComp(
    compName, 
    compWidth, 
    compHeight, 
    1, // pixel aspect ratio
    compDuration,
    compFrameRate
  );
  
  // Set background color to light gray
  var bgSolid = myComp.layers.addSolid([0.95, 0.95, 0.95], "Background", compWidth, compHeight, 1);
  
  // Create form container
  var formWidth = 500;
  var formHeight = 150; // Initial height
  var formX = compWidth / 2;
  var formY = compHeight / 2;
  
  var formContainer = myComp.layers.addShape();
  formContainer.name = "Form Container";
  
  // Add rounded rectangle for form
  var formGroup = formContainer.property("Contents").addProperty("ADBE Vector Group");
  formGroup.name = "Form Shape";
  
  var formRect = formGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
  formRect.property("Size").setValue([formWidth, formHeight]);
  formRect.property("Position").setValue([0, 0]);
  
  var formRound = formGroup.property("Contents").addProperty("ADBE Vector Filter - RC");
  formRound.property("Radius").setValue(8);
  
  // Add fill and stroke
  var formFill = formGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
  formFill.property("Color").setValue([1, 1, 1]); // White
  
  var formStroke = formGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
  formStroke.property("Color").setValue([0.9, 0.9, 0.9]); // Light gray
  formStroke.property("Stroke Width").setValue(1);
  
  // Add drop shadow
  var dropShadow = formContainer.property("Effects").addProperty("ADBE Drop Shadow");
  dropShadow.property("Shadow Color").setValue([0, 0, 0, 0.2]);
  dropShadow.property("Shadow Opacity").setValue(30);
  dropShadow.property("Shadow Distance").setValue(10);
  dropShadow.property("Shadow Softness").setValue(30);
  
  // Center the form
  formContainer.property("Transform").property("Position").setValue([formX, formY]);
  
  // Create form title
  var formTitle = myComp.layers.addText();
  formTitle.name = "Form Title";
  var formTitleSource = formTitle.property("Source Text");
  var formTitleTextDoc = new TextDocument("Registration Form");
  formTitleTextDoc.fontSize = 24;
  formTitleTextDoc.fillColor = [0.2, 0.2, 0.2];
  formTitleTextDoc.font = "Arial-Bold";
  formTitleSource.setValue(formTitleTextDoc);
  
  // Position the title
  formTitle.property("Transform").property("Position").setValue([formX, formY - formHeight/2 + 30]);
  
  // Create form fields directly (no parent groups)
  // Field 1: Name
  var nameLabel = myComp.layers.addText();
  nameLabel.name = "Name Label";
  var nameLabelSource = nameLabel.property("Source Text");
  var nameLabelTextDoc = new TextDocument("Full Name");
  nameLabelTextDoc.fontSize = 14;
  nameLabelTextDoc.fillColor = [0.3, 0.3, 0.3];
  nameLabelTextDoc.font = "Arial";
  nameLabelSource.setValue(nameLabelTextDoc);
  nameLabel.property("Transform").property("Position").setValue([formX - formWidth/2 + 15, formY - formHeight/2 + 60]);
  nameLabel.property("Transform").property("Anchor Point").setValue([0, 0]);
  
  // Name input field
  var nameInput = myComp.layers.addShape();
  nameInput.name = "Name Input";
  
  var nameInputGroup = nameInput.property("Contents").addProperty("ADBE Vector Group");
  nameInputGroup.name = "Input Shape";
  
  var nameInputRect = nameInputGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
  nameInputRect.property("Size").setValue([formWidth - 30, 40]);
  nameInputRect.property("Position").setValue([0, 0]);
  
  var nameInputRound = nameInputGroup.property("Contents").addProperty("ADBE Vector Filter - RC");
  nameInputRound.property("Radius").setValue(4);
  
  var nameInputFill = nameInputGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
  nameInputFill.property("Color").setValue([1, 1, 1]); // White
  
  var nameInputStroke = nameInputGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
  nameInputStroke.property("Color").setValue([0.9, 0.9, 0.9]); // Light gray
  nameInputStroke.property("Stroke Width").setValue(1);
  
  nameInput.property("Transform").property("Position").setValue([formX, formY - formHeight/2 + 80]);
  
  // Name placeholder
  var namePlaceholder = myComp.layers.addText();
  namePlaceholder.name = "Name Placeholder";
  var namePlaceholderSource = namePlaceholder.property("Source Text");
  var namePlaceholderTextDoc = new TextDocument("John Doe");
  namePlaceholderTextDoc.fontSize = 14;
  namePlaceholderTextDoc.fillColor = [0.7, 0.7, 0.7];
  namePlaceholderTextDoc.font = "Arial";
  namePlaceholderSource.setValue(namePlaceholderTextDoc);
  namePlaceholder.property("Transform").property("Position").setValue([formX - formWidth/2 + 45, formY - formHeight/2 + 85]);
  namePlaceholder.property("Transform").property("Anchor Point").setValue([0, 0]);
  
  // Field 2: Email
  var emailLabel = myComp.layers.addText();
  emailLabel.name = "Email Label";
  var emailLabelSource = emailLabel.property("Source Text");
  var emailLabelTextDoc = new TextDocument("Email Address");
  emailLabelTextDoc.fontSize = 14;
  emailLabelTextDoc.fillColor = [0.3, 0.3, 0.3];
  emailLabelTextDoc.font = "Arial";
  emailLabelSource.setValue(emailLabelTextDoc);
  emailLabel.property("Transform").property("Position").setValue([formX - formWidth/2 + 15, formY - formHeight/2 + 120]);
  emailLabel.property("Transform").property("Anchor Point").setValue([0, 0]);
  
  // Email input field
  var emailInput = myComp.layers.addShape();
  emailInput.name = "Email Input";
  
  var emailInputGroup = emailInput.property("Contents").addProperty("ADBE Vector Group");
  emailInputGroup.name = "Input Shape";
  
  var emailInputRect = emailInputGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
  emailInputRect.property("Size").setValue([formWidth - 30, 40]);
  emailInputRect.property("Position").setValue([0, 0]);
  
  var emailInputRound = emailInputGroup.property("Contents").addProperty("ADBE Vector Filter - RC");
  emailInputRound.property("Radius").setValue(4);
  
  var emailInputFill = emailInputGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
  emailInputFill.property("Color").setValue([1, 1, 1]); // White
  
  var emailInputStroke = emailInputGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
  emailInputStroke.property("Color").setValue([0.9, 0.9, 0.9]); // Light gray
  emailInputStroke.property("Stroke Width").setValue(1);
  
  emailInput.property("Transform").property("Position").setValue([formX, formY - formHeight/2 + 140]);
  
  // Email placeholder
  var emailPlaceholder = myComp.layers.addText();
  emailPlaceholder.name = "Email Placeholder";
  var emailPlaceholderSource = emailPlaceholder.property("Source Text");
  var emailPlaceholderTextDoc = new TextDocument("john@example.com");
  emailPlaceholderTextDoc.fontSize = 14;
  emailPlaceholderTextDoc.fillColor = [0.7, 0.7, 0.7];
  emailPlaceholderTextDoc.font = "Arial";
  emailPlaceholderSource.setValue(emailPlaceholderTextDoc);
  emailPlaceholder.property("Transform").property("Position").setValue([formX - formWidth/2 + 45, formY - formHeight/2 + 145]);
  emailPlaceholder.property("Transform").property("Anchor Point").setValue([0, 0]);
  
  // Field 3: Credit Card (with error)
  var ccLabel = myComp.layers.addText();
  ccLabel.name = "Credit Card Label";
  var ccLabelSource = ccLabel.property("Source Text");
  var ccLabelTextDoc = new TextDocument("Credit Card Number");
  ccLabelTextDoc.fontSize = 14;
  ccLabelTextDoc.fillColor = [0.3, 0.3, 0.3];
  ccLabelTextDoc.font = "Arial";
  ccLabelSource.setValue(ccLabelTextDoc);
  ccLabel.property("Transform").property("Position").setValue([formX - formWidth/2 + 15, formY - formHeight/2 + 180]);
  ccLabel.property("Transform").property("Anchor Point").setValue([0, 0]);
  
  // Credit Card input field
  var ccInput = myComp.layers.addShape();
  ccInput.name = "Credit Card Input";
  
  var ccInputGroup = ccInput.property("Contents").addProperty("ADBE Vector Group");
  ccInputGroup.name = "Input Shape";
  
  var ccInputRect = ccInputGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
  ccInputRect.property("Size").setValue([formWidth - 30, 40]);
  ccInputRect.property("Position").setValue([0, 0]);
  
  var ccInputRound = ccInputGroup.property("Contents").addProperty("ADBE Vector Filter - RC");
  ccInputRound.property("Radius").setValue(4);
  
  var ccInputFill = ccInputGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
  ccInputFill.property("Color").setValue([1, 1, 1]); // White
  
  var ccInputStroke = ccInputGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
  ccInputStroke.property("Color").setValue([0.9, 0.9, 0.9]); // Light gray at start
  ccInputStroke.property("Stroke Width").setValue(1);
  
  ccInput.property("Transform").property("Position").setValue([formX, formY - formHeight/2 + 200]);
  
  // Credit Card placeholder
  var ccPlaceholder = myComp.layers.addText();
  ccPlaceholder.name = "Credit Card Placeholder";
  var ccPlaceholderSource = ccPlaceholder.property("Source Text");
  var ccPlaceholderTextDoc = new TextDocument("XXXX XXXX XXXX XXXX");
  ccPlaceholderTextDoc.fontSize = 14;
  ccPlaceholderTextDoc.fillColor = [0.7, 0.7, 0.7];
  ccPlaceholderTextDoc.font = "Arial";
  ccPlaceholderSource.setValue(ccPlaceholderTextDoc);
  ccPlaceholder.property("Transform").property("Position").setValue([formX - formWidth/2 + 45, formY - formHeight/2 + 205]);
  ccPlaceholder.property("Transform").property("Anchor Point").setValue([0, 0]);
  
  // Error message
  var errorText = myComp.layers.addText();
  errorText.name = "Error Message";
  var errorSource = errorText.property("Source Text");
  var errorTextDoc = new TextDocument("Invalid format. Please try again.");
  errorTextDoc.fontSize = 12;
  errorTextDoc.fillColor = [0.9, 0.2, 0.2]; // Red
  errorTextDoc.font = "Arial";
  errorSource.setValue(errorTextDoc);
  errorText.property("Transform").property("Position").setValue([formX - formWidth/2 + 15, formY - formHeight/2 + 235]);
  errorText.property("Transform").property("Anchor Point").setValue([0, 0]);
  
  // Submit button
  var submitButton = myComp.layers.addShape();
  submitButton.name = "Submit Button";
  
  var buttonGroup = submitButton.property("Contents").addProperty("ADBE Vector Group");
  buttonGroup.name = "Button Shape";
  
  var buttonRect = buttonGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
  buttonRect.property("Size").setValue([formWidth - 30, 40]);
  buttonRect.property("Position").setValue([0, 0]);
  
  var buttonRound = buttonGroup.property("Contents").addProperty("ADBE Vector Filter - RC");
  buttonRound.property("Radius").setValue(4);
  
  var buttonFill = buttonGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
  buttonFill.property("Color").setValue([0.4, 0.2, 0.8]); // Purple
  
  submitButton.property("Transform").property("Position").setValue([formX, formY - formHeight/2 + 270]);
  
  // Button text
  var buttonText = myComp.layers.addText();
  buttonText.name = "Submit Text";
  var buttonTextSource = buttonText.property("Source Text");
  var buttonTextDoc = new TextDocument("Submit");
  buttonTextDoc.fontSize = 16;
  buttonTextDoc.fillColor = [1, 1, 1]; // White
  buttonTextDoc.font = "Arial-Bold";
  buttonTextDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
  buttonTextSource.setValue(buttonTextDoc);
  buttonText.property("Transform").property("Position").setValue([formX, formY - formHeight/2 + 275]);
  
  // ANIMATIONS
  
  // 1. Animate form container height
  var formHeightProp = formContainer.property("Contents").property("Form Shape").property("Contents").property("ADBE Vector Shape - Rect").property("Size");
  formHeightProp.setValueAtTime(0, [formWidth, 150]);
  formHeightProp.setValueAtTime(2, [formWidth, 220]);
  formHeightProp.setValueAtTime(4, [formWidth, 300]);
  
  // 2. Animate field appearances
  // Name field is visible from start
  
  // Email field appears at 2 seconds
  emailLabel.property("Transform").property("Opacity").setValueAtTime(0, 0);
  emailLabel.property("Transform").property("Opacity").setValueAtTime(2, 0);
  emailLabel.property("Transform").property("Opacity").setValueAtTime(2.5, 100);
  
  emailInput.property("Transform").property("Opacity").setValueAtTime(0, 0);
  emailInput.property("Transform").property("Opacity").setValueAtTime(2, 0);
  emailInput.property("Transform").property("Opacity").setValueAtTime(2.5, 100);
  
  emailPlaceholder.property("Transform").property("Opacity").setValueAtTime(0, 0);
  emailPlaceholder.property("Transform").property("Opacity").setValueAtTime(2, 0);
  emailPlaceholder.property("Transform").property("Opacity").setValueAtTime(2.5, 100);
  
  // Credit Card field appears at 4 seconds
  ccLabel.property("Transform").property("Opacity").setValueAtTime(0, 0);
  ccLabel.property("Transform").property("Opacity").setValueAtTime(4, 0);
  ccLabel.property("Transform").property("Opacity").setValueAtTime(4.5, 100);
  
  ccInput.property("Transform").property("Opacity").setValueAtTime(0, 0);
  ccInput.property("Transform").property("Opacity").setValueAtTime(4, 0);
  ccInput.property("Transform").property("Opacity").setValueAtTime(4.5, 100);
  
  ccPlaceholder.property("Transform").property("Opacity").setValueAtTime(0, 0);
  ccPlaceholder.property("Transform").property("Opacity").setValueAtTime(4, 0);
  ccPlaceholder.property("Transform").property("Opacity").setValueAtTime(4.5, 100);
  
  // 3. Error state appears at 6 seconds
  // Change border color to red
  ccInputStroke.property("Color").setValueAtTime(6, [0.9, 0.9, 0.9]); // Light gray
  ccInputStroke.property("Color").setValueAtTime(6.5, [0.9, 0.2, 0.2]); // Red
  
  // Show error message
  errorText.property("Transform").property("Opacity").setValueAtTime(0, 0);
  errorText.property("Transform").property("Opacity").setValueAtTime(6, 0);
  errorText.property("Transform").property("Opacity").setValueAtTime(6.5, 100);
  
  // 4. Shake animation at 7 seconds
  var formPos = formContainer.property("Transform").property("Position");
  formPos.setValueAtTime(7, [formX, formY]);
  formPos.setValueAtTime(7.1, [formX - 10, formY]);
  formPos.setValueAtTime(7.2, [formX + 10, formY]);
  formPos.setValueAtTime(7.3, [formX - 10, formY]);
  formPos.setValueAtTime(7.4, [formX + 10, formY]);
  formPos.setValueAtTime(7.5, [formX, formY]);
  
  // Set active composition
  app.project.activeItem = myComp;
  
  app.endUndoGroup();
  
  alert("Simple form animation created successfully!");
})(); 