// FormAnimation.jsx
// After Effects Script for Form Animation
// To use: In After Effects, go to File > Scripts > Run Script File and select this file

(function() {
  // Check if a project is open
  if (!app.project) {
    alert("Please open a project first!");
    return;
  }

  app.beginUndoGroup("Create Form Animation");

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
  formTitle.parent = formContainer;
  
  // Function to create form fields
  function createFormField(name, label, placeholder, yOffset, showAtTime, errorState) {
    // Create field group - using a solid instead of null object
    var fieldGroup = myComp.layers.addSolid([0, 0, 0, 0], name + " Field Group", 10, 10, 1);
    fieldGroup.enabled = false; // Make it invisible
    fieldGroup.name = name + " Field Group";
    fieldGroup.parent = formContainer;
    fieldGroup.property("Transform").property("Position").setValue([0, yOffset]);
    
    // Create label
    var fieldLabel = myComp.layers.addText();
    fieldLabel.name = name + " Label";
    var labelSource = fieldLabel.property("Source Text");
    var labelTextDoc = new TextDocument(label);
    labelTextDoc.fontSize = 14;
    labelTextDoc.fillColor = [0.3, 0.3, 0.3];
    labelTextDoc.font = "Arial";
    labelSource.setValue(labelTextDoc);
    fieldLabel.parent = fieldGroup;
    fieldLabel.property("Transform").property("Position").setValue([-formWidth/2 + 15, -10]);
    fieldLabel.property("Transform").property("Anchor Point").setValue([0, 0]);
    
    // Create input field
    var inputField = myComp.layers.addShape();
    inputField.name = name + " Input";
    inputField.parent = fieldGroup;
    
    // Add rectangle for input
    var inputGroup = inputField.property("Contents").addProperty("ADBE Vector Group");
    inputGroup.name = "Input Shape";
    
    var inputRect = inputGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
    inputRect.property("Size").setValue([formWidth - 30, 40]);
    inputRect.property("Position").setValue([0, 0]);
    
    var inputRound = inputGroup.property("Contents").addProperty("ADBE Vector Filter - RC");
    inputRound.property("Radius").setValue(4);
    
    // Add fill and stroke
    var inputFill = inputGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
    inputFill.property("Color").setValue([1, 1, 1]); // White
    
    var inputStroke = inputGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
    
    // If this is the error field, animate the stroke color
    if (errorState) {
      inputStroke.property("Color").setValueAtTime(showAtTime, [0.9, 0.9, 0.9]); // Light gray
      inputStroke.property("Color").setValueAtTime(showAtTime + 8, [0.9, 0.9, 0.9]); // Light gray
      inputStroke.property("Color").setValueAtTime(showAtTime + 9, [0.9, 0.2, 0.2]); // Red
    } else {
      inputStroke.property("Color").setValue([0.9, 0.9, 0.9]); // Light gray
    }
    
    inputStroke.property("Stroke Width").setValue(1);
    
    // Position the input
    inputField.property("Transform").property("Position").setValue([0, 10]);
    
    // Create placeholder text
    var placeholderText = myComp.layers.addText();
    placeholderText.name = name + " Placeholder";
    var placeholderSource = placeholderText.property("Source Text");
    var placeholderTextDoc = new TextDocument(placeholder);
    placeholderTextDoc.fontSize = 14;
    placeholderTextDoc.fillColor = [0.7, 0.7, 0.7];
    placeholderTextDoc.font = "Arial";
    placeholderSource.setValue(placeholderTextDoc);
    placeholderText.parent = inputField;
    placeholderText.property("Transform").property("Position").setValue([-formWidth/2 + 45, 5]);
    placeholderText.property("Transform").property("Anchor Point").setValue([0, 0]);
    
    // Add error message if needed
    if (errorState) {
      var errorText = myComp.layers.addText();
      errorText.name = name + " Error";
      var errorSource = errorText.property("Source Text");
      var errorTextDoc = new TextDocument("Invalid format. Please try again.");
      errorTextDoc.fontSize = 12;
      errorTextDoc.fillColor = [0.9, 0.2, 0.2]; // Red
      errorTextDoc.font = "Arial";
      errorSource.setValue(errorTextDoc);
      errorText.parent = fieldGroup;
      errorText.property("Transform").property("Position").setValue([-formWidth/2 + 15, 35]);
      errorText.property("Transform").property("Anchor Point").setValue([0, 0]);
      
      // Make error message appear after the error state
      var errorOpacity = errorText.property("Transform").property("Opacity");
      errorOpacity.setValueAtTime(0, 0);
      errorOpacity.setValueAtTime(showAtTime + 9, 0);
      errorOpacity.setValueAtTime(showAtTime + 9.5, 100);
    }
    
    // Animate the field appearance
    var fieldOpacity = fieldGroup.property("Transform").property("Opacity");
    fieldOpacity.setValueAtTime(0, 0);
    fieldOpacity.setValueAtTime(showAtTime, 0);
    fieldOpacity.setValueAtTime(showAtTime + 0.5, 100);
    
    // Return the field group
    return fieldGroup;
  }
  
  // Create form fields with staggered appearance
  var field1 = createFormField("Name", "Full Name", "John Doe", 0, 0, false);
  var field2 = createFormField("Email", "Email Address", "john@example.com", 60, 2, false);
  var field3 = createFormField("Phone", "Phone Number", "(555) 123-4567", 120, 4, false);
  var field4 = createFormField("Address", "Address", "123 Main St", 180, 6, false);
  var field5 = createFormField("CreditCard", "Credit Card Number", "XXXX XXXX XXXX XXXX", 240, 8, true);
  
  // Create submit button
  var submitButton = myComp.layers.addShape();
  submitButton.name = "Submit Button";
  submitButton.parent = formContainer;
  submitButton.property("Transform").property("Position").setValue([0, 300]);
  
  // Add rectangle for button
  var buttonGroup = submitButton.property("Contents").addProperty("ADBE Vector Group");
  buttonGroup.name = "Button Shape";
  
  var buttonRect = buttonGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
  buttonRect.property("Size").setValue([formWidth - 30, 40]);
  buttonRect.property("Position").setValue([0, 0]);
  
  var buttonRound = buttonGroup.property("Contents").addProperty("ADBE Vector Filter - RC");
  buttonRound.property("Radius").setValue(4);
  
  // Add fill
  var buttonFill = buttonGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
  buttonFill.property("Color").setValue([0.4, 0.2, 0.8]); // Purple
  
  // Add button text
  var buttonText = myComp.layers.addText();
  buttonText.name = "Submit Text";
  var buttonTextSource = buttonText.property("Source Text");
  var buttonTextDoc = new TextDocument("Submit");
  buttonTextDoc.fontSize = 16;
  buttonTextDoc.fillColor = [1, 1, 1]; // White
  buttonTextDoc.font = "Arial-Bold";
  buttonTextDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
  buttonTextSource.setValue(buttonTextDoc);
  buttonText.parent = submitButton;
  buttonText.property("Transform").property("Position").setValue([0, 5]);
  
  // Animate button appearance
  var buttonOpacity = submitButton.property("Transform").property("Opacity");
  buttonOpacity.setValueAtTime(0, 0);
  buttonOpacity.setValueAtTime(0.5, 100);
  
  // Animate form container height
  var formHeight = formContainer.property("Contents").property("Form Shape").property("Contents").property("ADBE Vector Shape - Rect").property("Size");
  formHeight.setValueAtTime(0, [formWidth, 150]);
  formHeight.setValueAtTime(2, [formWidth, 220]);
  formHeight.setValueAtTime(4, [formWidth, 290]);
  formHeight.setValueAtTime(6, [formWidth, 360]);
  formHeight.setValueAtTime(8, [formWidth, 430]);
  
  // Add shake animation after error
  var formPosition = formContainer.property("Transform").property("Position");
  formPosition.setValueAtTime(10, [formX, formY]);
  formPosition.setValueAtTime(10.1, [formX - 10, formY]);
  formPosition.setValueAtTime(10.2, [formX + 10, formY]);
  formPosition.setValueAtTime(10.3, [formX - 10, formY]);
  formPosition.setValueAtTime(10.4, [formX + 10, formY]);
  formPosition.setValueAtTime(10.5, [formX, formY]);
  
  // Set active composition
  app.project.activeItem = myComp;
  
  app.endUndoGroup();
  
  alert("Form animation created successfully!");
})(); 