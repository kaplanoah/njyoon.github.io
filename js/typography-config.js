
// Custom adjustments
var TYPOGRAPHY_OFFSETS = {
    grid: {
        // Controls horizontal position of numbers in grid cells
        // Smaller values make numbers appear further to the right
        number_horizontal_divisor: 13
    },
    clues: {
        // Size of clue numbers relative to clue text
        // 0.88 = 88% of clue text size (makes numbers smaller)
        number_size_multiplier: 0.88,

        // Vertical offset to align smaller numbers with text
        // 0.06 = 6% of clue font size upward adjustment
        number_vertical_offset: 0.06,

        // Horizontal space between clue numbers and clue text
        // 2.9 = 2.9 times the width of a space character
        // Larger values = more space between numbers and text
        number_spacing_multiplier: 2.9
    },
    headers: {
        // Font size reduction for section headers
        // 1 = 1 point smaller than (clue_pt + heading_pt)
        section_size_reduction: 1,

        // Margin adjustments around section headers
        // These were added to tighten spacing around ACROSS/DOWN
        margin_above_reduction: 6,    // Points to reduce above headers
        margin_below_addition: 6,     // Points to add below headers

        // Vertical spacing adjustment for section headers
        // Controls the offset used in header positioning calculations
        heading_offset: 1.5
    },
    page_headers: {
        // Right header vertical offset (for author/constructor info)
        // 0 = no offset, positive values move header up
        right_header_offset: 1,

        // Font weights for different header elements
        // 'normal' or 'bold'
        subheader_weight: 'normal',
        right_header_weight: 'normal'
    },
    copyright: {
        font_weight: 'normal',
        use_gray_color: false // true = use gray color, false = use black
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.TYPOGRAPHY_OFFSETS = TYPOGRAPHY_OFFSETS;
}

// For Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TYPOGRAPHY_OFFSETS;
} 