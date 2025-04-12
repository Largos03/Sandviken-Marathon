<div class="container mx-auto px-4 py-8 md:py-16">
    <h1 class="text-3xl md:text-4xl font-bold mb-4 md:mb-8">Race Results</h1>
    
    <div class="mb-4 md:mb-8">
        <label for="year" class="block mb-2 text-base md:text-lg font-medium">Select Year:</label>
        <select id="year" class="w-full md:w-auto px-3 md:px-4 py-2 border rounded-md">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
        </select>
    </div>
    
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white border text-sm md:text-base">
            <thead class="bg-gray-100">
                <tr>
                    <th class="px-3 md:px-6 py-2 md:py-4 text-left">Position</th>
                    <th class="px-3 md:px-6 py-2 md:py-4 text-left">Name</th>
                    <th class="px-3 md:px-6 py-2 md:py-4 text-left">Country</th>
                    <th class="px-3 md:px-6 py-2 md:py-4 text-left">Category</th>
                    <th class="px-3 md:px-6 py-2 md:py-4 text-left">Time</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-t">
                    <td class="px-3 md:px-6 py-2 md:py-4">1</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">John Smith</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Sweden</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Men 30-39</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">2:43:12</td>
                </tr>
                <tr class="border-t bg-gray-50">
                    <td class="px-3 md:px-6 py-2 md:py-4">2</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Maria Johnson</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Norway</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Women 20-29</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">2:45:37</td>
                </tr>
                <tr class="border-t">
                    <td class="px-3 md:px-6 py-2 md:py-4">3</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Erik Larsson</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Sweden</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Men 20-29</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">2:48:21</td>
                </tr>
                <tr class="border-t bg-gray-50">
                    <td class="px-3 md:px-6 py-2 md:py-4">4</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Anna Bergström</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Finland</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">Women 30-39</td>
                    <td class="px-3 md:px-6 py-2 md:py-4">2:51:05</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="mt-6 md:mt-8">
        <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">Previous Years</h2>
        <p class="text-base md:text-lg mb-3 md:mb-4">
            Results from previous years are available for download in PDF format.
        </p>
        <div class="flex flex-col md:flex-row gap-2 md:gap-4">
            <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">2023 Results (PDF)</a>
            <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">2022 Results (PDF)</a>
        </div>
    </div>
</div>

<style>
    h1, h2 {
        color: #333;
    }
    
    p {
        color: #555;
        line-height: 1.6;
    }
    
    @media (max-width: 640px) {
        table {
            font-size: 0.875rem;
        }
    }
</style> 