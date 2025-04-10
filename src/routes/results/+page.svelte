<div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-8">Race Results</h1>
    
    <div class="mb-8">
        <label for="year" class="block mb-2 text-lg font-medium">Select Year:</label>
        <select id="year" class="w-full md:w-auto px-4 py-2 border rounded-md">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
        </select>
    </div>
    
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white border">
            <thead class="bg-gray-100">
                <tr>
                    <th class="px-6 py-4 text-left">Position</th>
                    <th class="px-6 py-4 text-left">Name</th>
                    <th class="px-6 py-4 text-left">Country</th>
                    <th class="px-6 py-4 text-left">Category</th>
                    <th class="px-6 py-4 text-left">Time</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-t">
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">John Smith</td>
                    <td class="px-6 py-4">Sweden</td>
                    <td class="px-6 py-4">Men 30-39</td>
                    <td class="px-6 py-4">2:43:12</td>
                </tr>
                <tr class="border-t bg-gray-50">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Maria Johnson</td>
                    <td class="px-6 py-4">Norway</td>
                    <td class="px-6 py-4">Women 20-29</td>
                    <td class="px-6 py-4">2:45:37</td>
                </tr>
                <tr class="border-t">
                    <td class="px-6 py-4">3</td>
                    <td class="px-6 py-4">Erik Larsson</td>
                    <td class="px-6 py-4">Sweden</td>
                    <td class="px-6 py-4">Men 20-29</td>
                    <td class="px-6 py-4">2:48:21</td>
                </tr>
                <tr class="border-t bg-gray-50">
                    <td class="px-6 py-4">4</td>
                    <td class="px-6 py-4">Anna Bergström</td>
                    <td class="px-6 py-4">Finland</td>
                    <td class="px-6 py-4">Women 30-39</td>
                    <td class="px-6 py-4">2:51:05</td>
                </tr>
                <tr class="border-t">
                    <td class="px-6 py-4">5</td>
                    <td class="px-6 py-4">Karl Johansson</td>
                    <td class="px-6 py-4">Sweden</td>
                    <td class="px-6 py-4">Men 40-49</td>
                    <td class="px-6 py-4">2:54:38</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="mt-8">
        <p class="text-lg mb-4">
            Full results including split times are available for download:
        </p>
        <a href="#" class="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
            Download Complete Results (PDF)
        </a>
    </div>
</div>

<style>
    h1 {
        color: #333;
    }
    
    p {
        color: #555;
        line-height: 1.6;
    }
    
    table {
        border-collapse: collapse;
    }
</style> 