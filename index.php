<?php
$imagesDir = 'images/';
$images = glob($imagesDir . '*.{jpg,png,jpeg,gif}', GLOB_BRACE);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Image Gallery</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="spiral"></div>
        <div class="spiral"></div>
        <div class="spiral"></div>
    </div>
    
    <h1 class="album-title">Welcome to Gallery !</h1>

    <div class="album-container">
        <button id="prevBtn" class="nav-btn">&lt;</button>
        <div class="image-scroll">
            <?php foreach ($images as $index => $image): ?>
                <div class="image-group">
                    <div class="main-image">
                        <img src="<?php echo $image; ?>" alt="Image <?php echo $index + 1; ?>" class="image-3d">
                    </div>
                    <?php
                    $smallImages = array_slice($images, $index + 1, 2);
                    if (!empty($smallImages)):
                    ?>
                    <div class="small-images">
                        <?php foreach ($smallImages as $smallImage): ?>
                            <div class="small-image">
                                <img src="<?php echo $smallImage; ?>" alt="Small Image" class="image-3d">
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
        <button id="nextBtn" class="nav-btn">&gt;</button>
    </div>
    <div class="progress-indicator">
        <?php for ($i = 0; $i < ceil(count($images) / 3); $i++): ?>
            <div class="progress-bubble"></div>
        <?php endfor; ?>
    </div>

    <script src="script.js"></script>
</body>
</html>
